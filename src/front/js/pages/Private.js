import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.token) {
            navigate("/login");
        }
    }, [store.token]);

    return (
        <div className="container mt-5">
            <h2>Private Page</h2>
            <p>Welcome {store.user?.email}</p>
            <p>Hola, si estás aquí fue porque pudiste registrarte y loguearte correctamente 🦮.</p>
        </div>
    );
};