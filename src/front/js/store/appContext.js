import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Inicializamos el contexto global
export const Context = React.createContext(null);

// Función para inyectar el contexto en cualquier componente
const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        // Estado inicial del contexto
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: (updatedStore) =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions },
                    }),
            })
        );

        // Lógica que se ejecuta al montar la aplicación
        useEffect(() => {
            const initializeApp = async () => {
                const actions = state.actions;

                try {
                    // Verificar si hay una sesión activa
                    const token = localStorage.getItem("token");
                    if (token) {
                        await actions.verifyToken(token); // Verifica y carga datos del usuario
                    }

                    // Cargar datos iniciales (roles y configuración)
                    await actions.fetchRoles();
                    await actions.fetchConfig();

                    // Configuración global
                    const preferredLanguage = localStorage.getItem("language") || "es";
                    actions.setLanguage(preferredLanguage);

                    const theme = localStorage.getItem("theme") || "light";
                    actions.setTheme(theme);
                } catch (error) {
                    console.error("Error durante la inicialización:", error);
                }
            };

            initializeApp();
        }, []);

        // Proveer el contexto a los componentes
        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
