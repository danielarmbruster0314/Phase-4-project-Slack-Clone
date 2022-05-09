import React from "react";
import "./Login.css";

function Registration() {
	return (
		<>
			<div>
				<h1>This is the Registration Page</h1>
			</div>

			<main>
				<section>
					<h1>Success!</h1>
					<p>
						<a href='./Login'>Sign In</a>
					</p>
				</section>

				<section>
					<h2>Register</h2>
					<form>
						<label htmlFor='register'>Username:</label>
						<input
							type='text'
							id='username'
							autoComplete='off'
							placeholder='name@example.com'
						/>
						<p>
							4 to 24 characters.
							<br />
							Must begin with a letter. <br />
							Letters, numbers, underscores, hyphens allowed.
						</p>

						<label htmlFor='password'>Password:</label>
						<input type='password' id='password' placeholder='Pa$$w0rd!' />
						<p>
							4 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a number and a
							special character. <br />
							Allowed special characters:
							<span aria-label='exclamation mark'>!</span>
							<span aria-label='at symbol'>@</span>
							<span aria-label='hastag'>#</span>
							<span aria-label='dollar sign'>$</span>
							<span aria-label='percent'>%</span>
						</p>
						<label htmlFor='confirm_pwd'>Confirm Password:</label>
						<input type='password' id='confirm_pwd' placeholder='Pa$$w0rd!' />
						<p>Must match the first password input field.</p>
						<button> Sign Up </button>
					</form>
					<p>
						Already registered? <br />
						<span>
							<a href='./Login'>Sign In</a>
						</span>
					</p>
				</section>
			</main>
		</>
	);
}
export default Registration;
