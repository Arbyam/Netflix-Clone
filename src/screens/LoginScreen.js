import React,{ useState} from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";
function LoginScreen(props) {

    const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        ></img>

        <button onClick={()=> setSignIn(true)} className="loginScreen__button">Sign In</button>

        <div className="loginScreen__gradient"/>
      </div>
      <div className="loginScreen__body">
{signIn ? (
    <SignInScreen/>
): (

        <>
        <h1>Unlimited films, TV programs and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <h3>Ready to Watch? Enter your email to get started.</h3>

        <div className="loginScreen__input">
            <form>
                <input type='email' placeholder='email'/>

                <button onClick={()=>setSignIn(true)} className="loginScreen__getStarted">Get Started</button>
            </form>
        </div>
        </>
)}
      </div>
    </div>
  );
}

export default LoginScreen;
