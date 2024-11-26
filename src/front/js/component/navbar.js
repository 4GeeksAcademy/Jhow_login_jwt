import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";
import gear from "../../img/gear.png";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const username = store.username;
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign-up forms

    const handleLogin = (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements;
        actions.login(username.value, password.value);
        setShowModal(false);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements;
        actions.signUp(username.value, password.value); // Add sign-up logic in Flux
        setShowModal(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/listingpage">Listing Page</Link>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                name="search"
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    {/* Conditional Login/Logout */}
                    {username ? (
                        <>
                            <span className="navbar-text ms-3">Hello, {username}</span>
                            <button className="btn btn-outline-danger ms-3" onClick={() => actions.logout()}>Logout</button>
                        </>
                    ) : (
                        <button className="btn btn-outline-primary ms-3" onClick={() => setShowModal(true)}>Login</button>
                    )}
                    {/* Dropdown Menu */}
                    <div className="dropdown ms-3">
                        <img
                            src={gear}
                            alt="Profile"
                            width="40"
                            height="40"
                            className="rounded-circle dropdown-toggle"
                            id="profileDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ cursor: "pointer" }}
                        />
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                            <li><span className="dropdown-item-text">Hello, {username || "Guest"}</span></li>
                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                            <li><Link className="dropdown-item" to="/favorites">Favorites</Link></li>
                            <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" onClick={() => actions.logout()}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Login/Sign-Up Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{isLogin ? "Login" : "Sign Up"}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex justify-content-center mb-3">
                                    <button
                                        className={`btn ${isLogin ? "btn-primary" : "btn-outline-primary"} me-2`}
                                        onClick={() => setIsLogin(true)}
                                    >
                                        Login
                                    </button>
                                    <button
                                        className={`btn ${!isLogin ? "btn-primary" : "btn-outline-primary"}`}
                                        onClick={() => setIsLogin(false)}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                {isLogin ? (
                                    <form onSubmit={handleLogin}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="text" className="form-control" id="username" name="username" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password" name="password" required />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleSignUp}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="text" className="form-control" id="username" name="username" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password" name="password" required />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign Up</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
