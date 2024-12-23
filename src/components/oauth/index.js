import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
export default function Oauth() {
    const [user, setUser] = useState(null);
    const [errorInfo, setErrorInfo] = useState(null);
  
    const handleLogin = useGoogleLogin({
      onSuccess: (response) => {
        console.log(response);
        // You can now set the user state with the received information
        setUser(response);
      },
      onError: (error) => {
        console.error(error);
        // Handle the error and set the error information
        setErrorInfo(error);
      },
    });
  
    return (
      <div className="google-oauth-login-container">
        <h3>Google OAuth Login</h3>
        <button onClick={handleLogin}>Google Login</button>
  
        {/* Display user info if available */}
        {user && <div>User Info: {JSON.stringify(user)}</div>}
  
        {/* Display error info if there was an error */}
        {errorInfo && <div>Error: {errorInfo.message}</div>}
      </div>
    );
  }