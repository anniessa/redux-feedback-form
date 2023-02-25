import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Support() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState(0);

    const handleSubmit = (event) => {
        console.log('handle submit')
        event.preventDefault();
        //on submit, dispatch the rating
        
        if (support === 0) {
            alert('Please enter a rating.')
        } else {
            dispatch({ type: "SET_SUPPORT", payload: support })
            history.push('/comments');
        }
    };

    const handleChange = (event) => {
        // string value needs to be changed to a number by adding the '+' sign
        setSupport(+event.target.value)
    };


    return (
        <div>
            <form id="feedback-form" onSubmit={handleSubmit}>
                <div>
                    <h3>Support</h3>

                    <input
                        type="radio"
                        onChange={handleChange}
                        value="1"
                    // checked prop identifies that the state matches
                        checked={support === 1}
                    />
                    <label htmlFor='support'>1</label>

                    <input
                        type="radio"
                        onChange={handleChange}
                        value="2"
                        checked={support === 2}
                    />
                    <label htmlFor='support'>2</label>

                    <input
                        type="radio"
                        onChange={handleChange}
                        value="3"
                        checked={support === 3}
                    />
                    <label htmlFor='support'>3</label>

                    <input
                        type="radio"
                        onChange={handleChange}
                        value="4"
                        checked={support === 4}
                    />
                    <label htmlFor='support'>4</label>

                    <input
                        type="radio"
                        onChange={handleChange}
                        value="5"
                        checked={support === 5}
                    />
                    <label htmlFor='support'>5</label>

                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    )
}

export default Support;