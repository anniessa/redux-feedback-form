

function FeedbackItem({ feedback }) {


    return (
        <div>
            <h3> Review Your Feedback </h3>
            <ul>
                <li> Feeling: {feedback.feeling}</li>
                <li> Understanding: {feedback.understanding}</li>
                <li> Support: {feedback.support}</li>
                <li> Comments: {feedback.comments}</li>
                <li> Date: {new Date(feedback.date).toLocaleString()}</li>
            </ul>
        </div>

    )
};

export default FeedbackItem;