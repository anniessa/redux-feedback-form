import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
    Alert,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid
} from '@mui/material';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Review() {
    //pull feeling value from the store
    const feedback = useSelector((store) => store.form);
    const dispatch = useDispatch();
    const history = useHistory();
    const swal = withReactContent(Swal);

    const handleSubmit = () => {
        console.log('clicked handle submit')
        axios
            .post('/feedback', feedback)
            .then(() => {
                dispatch({ type: 'RESET_FORM' })
                swal
          .fire({
            icon: 'success',
            title: "Thank you for your feedback!"
          })
          .then(() => {
            history.push('/')
          });    
            })
            .catch((error) => {
                // tried to make this a SweetAlert... curious if it's possible (can you have a promise for a catch?)
                alert('Error posting feedback due to empty values. Please go back and enter a response for each question.')
                console.error(error)
            });
    }

    const goBack = () => {
        history.push('/support')
    }

    return (

        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={3}></Grid>

            {/* I wanted to practice making a card in MUI, not the most coherent styling, but hopefully that's okay for
            the purposes of this assignment! */}

                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image="/images/goat_small.jpg"
                        title="check circle outline icon"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Summary
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Please review your answers before submitting.
                        </Typography>
                        <p>Feeling: {feedback.feeling}</p>
                        <p>Understanding: {feedback.understanding}</p>
                        <p>Support: {feedback.support}</p>
                        <p>Comments: {feedback.comments}</p>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={goBack}> Back </Button>
                        <Button size="small" onClick={handleSubmit}> Submit </Button>
                    </CardActions>
                </Card>
                </Grid>
        </div>
    )
}

export default Review;