import React from "react";
import "./Login.css";

function Login() {
	return (
		<>
			<main>
				<section>
					<h1>Sign in to Slack </h1>
					<br />
					<p>
						We suggest using the <strong> e-mail you use at work.</strong>
					</p>
				</section>

				<section>
					<h2> Sign In</h2>
					<form>
						<label>User Name</label>
						<input
							type='text'
							id='username'
							placeholder='name@example.com'
							required
						/>

						<label>Password</label>
						<input
							type='password'
							id='password'
							placeholder='Pa$$w0rd!'
							required
						/>

						<button>Log In</button>
					</form>

					<p>
						Need an Account? <br />
						<span>
							<a href='../Registration'>Create Account</a>
						</span>
					</p>
				</section>
			</main>
		</>
	);
}

export default Login;
