import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";


function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
        console.log('handle submit')
        event.preventDefault();
        //on submit, dispatch the rating
        
        if (comments === '') {
            alert('Please enter your comments.')
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
        <div>
        <h3> Comments </h3>
        <form id="comment-form"onSubmit={handleSubmit}>
            <textarea
            rows="10" cols="40"
            onChange={handleChange}
            />
        <button type="submit" onClick={goBack}>Back</button>
        <button type="submit">Next</button>
        </form>
        </div>
    )
}

export default Comments;