import Logo from '../../assets/images/logo.svg'
import '../login/login.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {

    const navigate = useNavigate();

    const defaultEmail = "admin@gmail.com";
    const defaultPassword = "123456" ;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            alert("Please enter email and password");
            return;
        }

        if (email === defaultEmail && password === defaultPassword) {
            navigate('/home');
        } else {
            alert("Incorrect Email or Password");
        }
    };

    return (
        <div className='login-sec'>

            <div className="header">
                <img src={Logo} alt="logo" className='logo' />
                <h1>Sign In</h1>
                <p>Please login to continue to your account.</p>
            </div>

            <form onSubmit={handleSubmit} className='forms'>

                <div className="input-fields">
                    <label>Email ID</label>
                    <input 
                        className='input'
                        type="email"
                        placeholder='Enter Your Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-fields">
                    <label>Password</label>
                    <input 
                        className='input'
                        type="password"
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="login-checkbox">
                    <input type="checkbox" className='login-check'/>
                    <label className='remember'>Remember me</label>
                </div>

                <div className="login-btn">
                    <button className='login-btn' type="submit">Sign In</button>
                </div>

            </form>
        </div>
    )
}

export default Login;
