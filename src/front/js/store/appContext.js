import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        // Initialize state with a default value first
        const [state, setState] = useState({
            store: {
                token: null,
                user: null
            },
            actions: {}
        });

        // Then, run the getState function once the component is mounted
        useEffect(() => {
            setState(getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            }));
        }, []);

        // Validate token if exists when component mounts
        useEffect(() => {
            if (localStorage.getItem("token")) {
                state.actions.validateToken && state.actions.validateToken();
            }
        }, [state.actions]);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;