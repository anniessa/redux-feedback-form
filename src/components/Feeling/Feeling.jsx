import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import {
    FormControl,
    FormLabel,
    FormHelperText,
    FormControlLabel,
    RadioGroup,
    Radio,
    Button,
    Box
} from "@mui/material";


function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    // feedback info object
    const [feeling, setFeeling] = useState(0);
    // alert for input validation
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);


    const handleSubmit = (event) => {
        console.log('handle submit')
        event.preventDefault();
        //on submit, dispatch the rating

        if (feeling === 0) {
            setHelperText('Please enter your answer.');
            setError(true);
        } else {
            dispatch({ type: "SET_FEELING", payload: feeling })
            history.push('/understanding');
        }
    };

    const handleChange = (event) => {
        setFeeling(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormControl error={error}>
                    <FormLabel id="feeling-form">Feeling</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="feeling-form"
                        name="Feeling"
                        value={feeling}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                        <FormControlLabel value="5" control={<Radio />} label="5" />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Box
                        m={1}
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        <Button variant="contained"
                            type="submit">Next</Button>
                    </Box>
                </FormControl>
            </form>

        </>
    )


   

}

export default Feeling;