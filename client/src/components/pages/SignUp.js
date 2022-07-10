import "../../css/signUp.css";
import React, {useState} from 'react';
import {Grid, Button, TextField, Typography, Link} from "@mui/material";
import CreatePopBox from "./Popbox";
import AvailabilityPage from "./AvailabilityPage";
import { useDispatch} from "react-redux"
import {addUserAsync} from "../../redux/User/thunk";

export default function SignUp(){
    let dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [cPassword, setcPassword] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        if(cPassword === Password){
            dispatch(addUserAsync({userName,email,Password}));
            // <AvailabilityPage/>;
        } else {
            return null;
        }
    }

    return (
        <div className="outer-div">
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <form className="aa" onSubmit={handleSubmit} >
                    <Typography variant="h4" display="inline-box" component="h3"  align="center" sx={{ flex: '1 1 100%', fontWeight: 'bold' }}>
                        Sign Up
                    </Typography>
                    <br></br>
                    <br></br>
                    <TextField input="userName" label="userName" variant="outlined"   fullWidth
                               onChange={(event)=>setUserName(event.target.value)} required/>
                    <br></br>
                    <br></br>

                    <TextField input="email" label="Email" variant="outlined"   fullWidth
                               onChange={(event)=>setEmail(event.target.value)} required/>
                    <br></br>
                    <br></br>

                    <TextField input="password" label="Password" variant="outlined" fullWidth
                               onChange={(event)=>setPassword(event.target.value)} required/>
                    <br></br>
                    <br></br>
                    <TextField input="password" label="Confirm Password" variant="outlined"   fullWidth
                               onChange={(event)=>setcPassword(event.target.value)} required/>
                    <br></br>
                    <br></br>


                    <br></br>


                    <div className="signUp">
                        <Button variant="contained"  size ="large" type="submit" align="center" type="submit"
                        >Sign Up
                        </Button>
                        <br></br>
                        <a href="./Login"> Already have a account? Login</a>
                    </div>
                </form>
            </Grid>

            <Grid item xs={6}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <CreatePopBox/>
            </Grid>
        </Grid>
        </div>

    )
}
