import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const responseMessage = (response) => {
        navigate("/MainPage")
      };
      const errorMessage = (error) => {
        console.log(error);
      };    
    return(
        <div>
        <h2>React Google Login</h2>
        <br />
        <br />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}

export{Login}