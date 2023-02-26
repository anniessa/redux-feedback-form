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

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();


    // feedback info object
    const [understanding, setUnderstanding] = useState(0);
    // alert for input validation
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        console.log('handle submit')
        event.preventDefault();
        //on submit, dispatch the rating
        if (understanding === 0) {
            setHelperText('Please enter your answer.');
            setError(true);
        } else {
            dispatch({ type: "SET_UNDERSTANDING", payload: understanding })
            history.push('/support');
        }
    };

    const goBack = () => {
        history.push('/')
    }

    const handleChange = (event) => {
        setUnderstanding(event.target.value)
    };

    return (

        <>
            <form onSubmit={handleSubmit}>
                <FormControl error={error}>
                    <FormLabel id="understanding-form">Understanding</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="understanding-form"
                        name="Understanding"
                        value={understanding}
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
                        component="span"
                        m={1}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Button variant="contained" onClick={goBack}>Back</Button>
                        <Button variant="contained" type="submit">Next</Button>
                    </Box>
                </FormControl>
            </form>

        </>
    )
}

export default Understanding;