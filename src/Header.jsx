import { useState } from 'react';
import './App.css'
import { TextField } from './components/textfield';

function Header() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

    return (
        <div className="container">
	<div className="card w-50 mx-auto my-5">
		<div className="card-header text-center">User Login</div>
		<div className="card-body">

			<TextField 
				label={"Email"} 
				placeHolder={"Enter email address"} 
				type={"email"}
				defaultValue={email}
				onChange={ 
					(input) => { setEmail(input) }
				}
			/>

			<TextField 
				label={"Password"} 
				placeHolder={"Enter Password"} 
				type={"password"}
				defaultValue={password}
				onChange={ 
					(input) => { setPassword(input) }
				}
			/>

			<br/>
			<div className="text-center">
				<button
					className="btn btn-primary" 
					onClick={ () =>
						console.log("Value is: " + email)
					}
				>Login</button>
			</div>

		</div>
	</div>
</div>

    );

}

export default Header