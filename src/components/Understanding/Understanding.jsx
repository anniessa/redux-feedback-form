import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    // feedback info object
    const [understanding, setUnderstanding] = useState(0);

    const handleSubmit = (event) => {
        console.log('handle submit')
        event.preventDefault();
        //on submit, dispatch the rating
        
        if (understanding === 0) {
            alert('Please enter a rating.')
        } else {
            dispatch({ type: "SET_UNDERSTANDING", payload: understanding })
            history.push('/support');
        }
    };

    const handleChange = (event) => {
        // string value needs to be changed to a number by adding the '+' sign
        setUnderstanding(+event.target.value)
    };

    return (
        <div>
            <form id="feedback-form" onSubmit={handleSubmit}>
                <div>
                    <h3>Understanding</h3>

                    <input
                        type="radio"
                        onChange={handleChange}
                        value="1"
                    // checked prop identifies that the state matches
                        checked={understanding === 1}
                    />
                    <label htmlFor='understanding'>1</label>

                    <input
                        type="radio"
                        onChange={handleChange}
                        value="2"
                        checked={understanding === 2}
                    />
                    <label htmlFor='understanding'>2</label>

                    <input
                        type="radio"
                        onChange={handleChange}
                        value="3"
                        checked={understanding === 3}
                    />
                    <label htmlFor='understanding'>3</label>

                    <input
                        type="radio"
                        onChange={handleChange}
                        value="4"
                        checked={understanding === 4}
                    />
                    <label htmlFor='understanding'>4</label>

                    <input
                        type="radio"
                        onChange={handleChange}
                        value="5"
                        checked={understanding === 5}
                    />
                    <label htmlFor='understanding'>5</label>

                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    )
}

export default Understanding;