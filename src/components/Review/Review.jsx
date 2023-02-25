import { useSelector } from "react-redux";
import FeedbackItem from "../FeedbackItem/FeedbackItem";


function Review() {

    const feedbackItems = useSelector ((store) => store.feedback);

    return (
        <div>
            {feedbackItems.map((feedback) => {
                return <FeedbackItem key={feedback.id} feedback={feedback} />
            })}
        </div> 
    )
}

export default Review;