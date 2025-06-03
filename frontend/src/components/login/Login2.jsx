import React from 'react';
import './Login.css';
import ganeshaPic from "../../assets/login/ganeshaPic.png";

function Login2() {

    return (
        <div class="wrapper">
        <div class="container">
            <div class="left-side">
            <img src={ganeshaPic} alt="Lord Ganesha" />
            <div class="shloka">
                śuklāṁ baradharaṁ viṣṇuṁ śaśi varṇaṁ caturbhujam <br />
                prasanna vadanam dhyāyet sarva vighnopa śāntaye ||<br /><br />
                yasya dviradha vaktrādyāḥ pāriṣadhya paraśatam <br />
                vighnam nighnanti satataṁ viśvaksena tamāśraye ||
            </div>
            </div>
            <div class="right-side">
            <div class="login-box">
                <h2>Login</h2>
                <form>
                <label>Email</label>
                <input type="email" placeholder="Enter email" required />

                <label>Password</label>
                <input type="password" placeholder="Enter password" required />

                <label>
                    <input type="checkbox" /> Show Password
                </label>
                <br></br>
                <button type="submit">SIGN IN</button>

                <div class="links">
                    <p><a href="#">Forgot Username / Password?</a></p>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Login2;

