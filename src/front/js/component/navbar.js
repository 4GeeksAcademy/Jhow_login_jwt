import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto d-flex">
					{!store.token ? (
						<>
							<Link to="/demo">
								<button className="btn btn-primary me-2">Check the Context in action</button>
							</Link>
							<Link to="/login">
								<button className="btn btn-primary me-2">Login</button>
							</Link>
							<Link to="/signup">
								<button className="btn btn-secondary">Sign Up</button>
							</Link>
						</>
					) : (
						<>
							<Link to="/demo">
								<button className="btn btn-primary me-2">Check the Context in action</button>
							</Link>
							<button 
								className="btn btn-warning"
								onClick={() => {
									actions.logout();
									navigate("/login");
								}}
							>
								Logout
							</button>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};