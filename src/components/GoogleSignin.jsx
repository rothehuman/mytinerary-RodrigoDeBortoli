import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react"

export const GoogleSignin = () => {

    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential
        }

        const userResponse = await axios.post('http://localhost:7000/api/auth/google', data);

        localStorage.setItem('token', userResponse.data.response.token)
        localStorage.setItem('user', JSON.stringify(userResponse.data.response.user))

        console.log(userResponse)
        console.log(userResponse.data.response.token)
        console.log(userResponse.data.response.user)

        window.location.reload(true);
    }

    useEffect(() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "62077239350-vqham79brjq4epqdc738he0jp2c4g8nv.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'rectangular', theme: "outline", size: "large", text: 'signin_with' }  // customization attributes
            );
        }
    }, [])

    return (
        <div ref={googleButton}></div>
    )
}