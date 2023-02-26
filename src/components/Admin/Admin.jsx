import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Checkbox } from '@mui/material'
import axios from "axios";

import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';


function Admin() {

    const feedbackItems = useSelector((store) => store.totalFeedback);
    const [flagged, setFlagged] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
      getFeedback();
    }, []);
  
    //GET for admin page
    const getFeedback = () => {
      axios.get('/feedback')
        .then((response) => {
          dispatch({
            type: "SET_FEEDBACK",
            payload: response.data
          });
        });
    };

    const handleChange = (event) => {
        console.log(event.target.flagged)
        setFlagged(event.target.flagged);

        axios.put(`/feedback/${feedbackItems.id}`, feedbackItems.flagged)
        .then(() => {
            // need to set the opposite of flagged when changed
            dispatch({type: "SET_FLAGGED", payload: !flagged})
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <div>
            <h3>Admin Page</h3>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Flag for Follow-up</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedbackItems.map((feedback, i) => {
                        return <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {feedback.feeling}
                            </TableCell>
                            <TableCell>
                                {feedback.understanding}
                            </TableCell>
                            <TableCell>
                                {feedback.support}
                            </TableCell>
                            <TableCell>
                                {feedback.comments}
                            </TableCell>
                            <TableCell>
                                {new Date(feedback.date).toLocaleString()}
                            </TableCell>
                            <TableCell>
                                <Checkbox
                                    flagged={flagged}
                                    value={feedback.flagged}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
            <div>
            </div>
        </div>
    )
}

export default Admin;