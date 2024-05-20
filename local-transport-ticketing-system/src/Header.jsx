import './App.css'

function Header() {

    return (
        <div class="container">
	<div class="card w-50 mx-auto my-5">
		<div class="card-header text-center">User Login</div>
		<div class="card-body">
			<form action="login" method="post">
				<div class="form-group">
				<label>Email</label>
				<input class="form-control" name="email" type="email" required />
				</div>
				
				<div class="form-group"> 
				<label>Password</label>
				<input class="form-control" name="login-password" type="password" required />
				</div>
				<br/>
				<div class="text-center">
					<button type="submit" class="btn btn-primary">Login</button>
				</div>
			</form>
		</div>
	</div>
</div>

    );

}

export default Header