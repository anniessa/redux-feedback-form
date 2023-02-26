import { useSelector } from "react-redux";
import FeedbackItem from "../FeedbackItem/FeedbackItem";


function Admin() {

    const feedbackItems = useSelector ((store) => store.totalFeedback);

    return (
        <div>
            {feedbackItems.map((feedback) => {
                return <FeedbackItem key={feedback.id} feedback={feedback} />
            })}
        </div> 
    )
}

export default Admin;