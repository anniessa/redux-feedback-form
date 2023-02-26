import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Box, Button, TextField, FormHelperText } from '@mui/material';


function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comments, setComments] = useState('');
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        console.log('handle submit')
        event.preventDefault();
        //on submit, dispatch the rating

        if (comments === '') {
            setHelperText('Please enter your comments.');
            setError(true);
        } else {
            dispatch({ type: "SET_COMMENTS", payload: comments })
            history.push('/review');
        }
    };

    const handleChange = (event) => {
        setComments(event.target.value)
    };

    const goBack = () => {
        history.push('/support')
    }

    return (
        <>
            <Box
                component="span"
                m={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <form id="comment-form" onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-textarea"
                        label="Comments"
                        placeholder="Please add your comments here"
                        onChange={handleChange}
                        error={error}
                        multiline
                    />
                    <FormHelperText error={error}>{helperText}</FormHelperText>
                    <Button variant="contained" type="submit" onClick={goBack}>Back</Button>
                    <Button variant="contained" type="submit">Next</Button>

                </form>
            </Box>
        </>

    )
}

export default Comments;