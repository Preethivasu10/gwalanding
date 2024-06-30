import React from 'react';
import './signup.css';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SignupCard = ({ onCloseSignupCard, onSwitchToLogin }) => {
    return (
        <div className="signup-card">
            <div className="signup-image-section">
                <img className="signup-image" src="https://s3-alpha-sig.figma.com/img/cadf/026f/e42cec4b6f9504c323720b8acaa34f37?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V3EfXRzsykisAjSVQ6QHpgG9WiRCmx1uHyNvngSlMcF6vEhqGgYXIrTr5K~8d4KayQ8vkopxYsTThGK4MaYCq3S0KSQKXjH5MT~sYuwq~Ci1kH3tDJ1L5b0WWDKfkfqiFksDrCBFc8XSaswUdby0dA5qqseMPeLPwHgavU29vmt81vyUGwxup4rEI4-NILzCPIBIzNw~IIE99RFpglZemaMUJRPTBjdPu9d4lUBohac0RHGuQk~k58cTo2AKRHMupqMbLcm8peKx8Ej-RBI~fRIVCGKyud1aJDnG~xknKPgn0t0aCtDJPJ0~Xvpqi9CTxXsAHjqzr1J4c~E~hUqUjg__" alt="Signup" />
            </div>
            <div className="signup-section">
                <div className="signup-section-div">
                    <button className='signup-close-btn' onClick={onCloseSignupCard}>
                        <IoClose />
                    </button>
                    <img src="./logo.png" alt="Signup" width={"70px"} height={"70px"} />
                    <h2 className='signup-section-h1'><b>Sign Up</b></h2>
                    <p className='signup-section-p'>Sign up to your account.</p>
                    <form>
                        <div className="signup-form-group">
                            <label htmlFor="name">Name</label>
                            <input className='signup-inputs' type="text" id="name" name="name" placeholder='Enter your name' />
                        </div>
                        <div className="signup-form-group">
                            <label htmlFor="email">Email</label>
                            <input className='signup-inputs' type="email" id="email" name="email" placeholder='Enter your email' />
                        </div>
                        <div className="signup-form-group">
                            <label htmlFor="password">Password</label>
                            <input className='signup-inputs' type="password" id="password" name="password" placeholder='Enter your password' />
                        </div>
                        <div className="signup-form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input className='signup-inputs' type="text" id="mobile" name="mobile" placeholder='Enter your mobile number' />
                        </div>
                        <button type="submit" className="signup-button">Sign Up</button>
                    </form>
                    <div className="signup-social-login">
                        <button className="signup-social-login-button signup-google-login"><FcGoogle className='signup-giocn' />Sign up with Google</button>
                        <button className="signup-social-login-button signup-apple-login"><FaApple className='signup-aiocn' />Sign up with Apple</button>
                    </div>
                    <p className='signup-section-pp'>Already have an account?<span className='signup-loginp' onClick={onSwitchToLogin}>Login</span></p>
                </div>
            </div>
        </div>
    );
}

export default SignupCard;
