import './App.css'

function Header() {

    return (
        <div className="container">
	<div className="card w-50 mx-auto my-5">
		<div className="card-header text-center">User Login</div>
		<div className="card-body">
			<form action="login" method="post">
				<div className="form-group">
				<label>Email</label>
				<input className="form-control" name="email" type="email" required />
				</div>
				
				<div className="form-group"> 
				<label>Password</label>
				<input className="form-control" name="login-password" type="password" required />
				</div>
				<br/>
				<div className="text-center">
					<button type="submit" className="btn btn-primary">Login</button>
				</div>
			</form>
		</div>
	</div>
</div>

    );

}

export default Header