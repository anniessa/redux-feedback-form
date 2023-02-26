import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Review() {
    //pull feeling value from the store
    const feedback = useSelector((store) => store.form);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        console.log('clicked handle submit')
        axios
            .post('/feedback', feedback)
            .then(() => {
                dispatch({ type: 'RESET_FORM' })
                history.push('/')
            })
            .catch((error) => {
                alert('Error posting feedback to server.')
                console.error(error)
            });
    }

    const goBack = () => {
        history.push('/support')
    }


    return (
        <div>
            <h3> Review Your Feedback </h3>
            <ul id="review">
                <li>
                    Feeling: {feedback.feeling}
                </li>
                <li>
                    Understanding: {feedback.understanding}
                </li>
                <li>
                    Support: {feedback.support}
                </li>
                <li>
                    Comments: {feedback.comments}
                </li>
            </ul>
            <button onClick={goBack}> Back </button>
            <button onClick={handleSubmit}> Submit </button>
            
        </div>


    )
}

export default Review;