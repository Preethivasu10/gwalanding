import React from 'react';
import './login.css';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const LoginCard = ({ onClose, onSwitchToSignup, onForgotPassword }) => {
  return (
    <div className="login-card">
      <div className="login-image-section">
        <img className="login-image" src="https://s3-alpha-sig.figma.com/img/cadf/026f/e42cec4b6f9504c323720b8acaa34f37?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V3EfXRzsykisAjSVQ6QHpgG9WiRCmx1uHyNvngSlMcF6vEhqGgYXIrTr5K~8d4KayQ8vkopxYsTThGK4MaYCq3S0KSQKXjH5MT~sYuwq~Ci1kH3tDJ1L5b0WWDKfkfqiFksDrCBFc8XSaswUdby0dA5qqseMPeLPwHgavU29vmt81vyUGwxup4rEI4-NILzCPIBIzNw~IIE99RFpglZemaMUJRPTBjdPu9d4lUBohac0RHGuQk~k58cTo2AKRHMupqMbLcm8peKx8Ej-RBI~fRIVCGKyud1aJDnG~xknKPgn0t0aCtDJPJ0~Xvpqi9CTxXsAHjqzr1J4c~E~hUqUjg__" alt="Login" />
      </div>
      <div className="login-section">
        <div className="login-section-div">
          <button className='login-close-btn' onClick={onClose}>
            <IoClose />
          </button>
          <img src="./logo.png" alt="Login" width={"70px"} height={"70px"} className='logoimg'/>
          <h2 className='login-section-h1'>Login</h2>
          <p className='login-section-p'>Log in to your account.</p>
          <form>
            <div className="login-form-group">
              <label htmlFor="email">Email</label>
              <input className='login-inputs' type="email" id="email" name="email" placeholder='Enter your email' />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input className='login-inputs' type="password" id="password" name="password" placeholder='Enter your password' />
              <a href="#" className='login-forgot-password' onClick={onForgotPassword}>Forgot Password?</a>
            </div>
            
            <button type="submit" className="login-button">Log In</button>
          </form>
          <div className="login-social-login">
            <button className="login-social-login-button login-google-login"><FcGoogle className='login-giocn' />Log in with Google</button>
            <button className="login-social-login-button login-apple-login"><FaApple className='login-aiocn' />Log in with Apple</button>
          </div>
          <p className='login-section-pp'>
            Don't have an account? <span className='login-signup' onClick={onSwitchToSignup}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
