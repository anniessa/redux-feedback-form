import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    // feedback info object
    const [feeling, setFeeling] = useState(0);

    const handleSubmit = (event) => {
        console.log('handle submit')
        event.preventDefault();
        //on submit, dispatch the rating

        if (feeling === 0) {
            alert('Please enter a rating.')
        } else {
            dispatch({ type: "SET_FEELING", payload: feeling })
            history.push('/understanding');
        }
    };

    const handleChange = (event) => {
        // string value needs to be changed to a number by adding the '+' sign
        setFeeling(+event.target.value)
    };


    return (
        <form id="feedback-form" onSubmit={handleSubmit}>
            <div>
                <h3>Feeling</h3>

                <input
                    type="radio"
                    onChange={handleChange}
                    value="1"
                    // checked prop identifies that the state matches
                    checked={feeling === 1}
                />
                <label htmlFor='feeling'>1</label>

                <input
                    type="radio"
                    onChange={handleChange}
                    value="2"
                    checked={feeling === 2}
                />
                <label htmlFor='feeling'>2</label>

                <input
                    type="radio"
                    onChange={handleChange}
                    value="3"
                    checked={feeling === 3}
                />
                <label htmlFor='feeling'>3</label>

                <input
                    type="radio"
                    onChange={handleChange}
                    value="4"
                    checked={feeling === 4}
                />
                <label htmlFor='feeling'>4</label>

                <input
                    type="radio"
                    onChange={handleChange}
                    value="5"
                    checked={feeling === 5}
                />
                <label htmlFor='feeling'>5</label>

                <button type="submit">Next</button>
            </div>
        </form>
    )

}

export default Feeling;