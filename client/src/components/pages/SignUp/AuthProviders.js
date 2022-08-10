import React, {useEffect} from "react";
import {Button} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import Auth from "../../../firebaseApp";
import {setUser} from "../../../redux/user";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addUser} from "../../../redux/users/service";

export default function AuthProviders() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getRedirectResult(Auth)
            .then((result) => {
                console.log("IN AUTH");
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                dispatch(setUser(user.toJSON()));
                return addUser();
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert(`${errorCode}: ${errorMessage}`);
            }
        );
    }, [])


    const handleGoogleSignIn = async (e) => {
        const provider = new GoogleAuthProvider();
        await signInWithRedirect(Auth, provider);
    }

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Button variant="outlined" startIcon={<GoogleIcon/>} onClick={handleGoogleSignIn} >
                Continue with Google
            </Button>

            <Button variant="outlined" startIcon={<GitHubIcon/>} onClick={() => {navigate('/')}} >
                Continue with GitHub
            </Button>
         </Stack>
    )
}



