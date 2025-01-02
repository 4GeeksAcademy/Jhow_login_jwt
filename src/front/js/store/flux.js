const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: localStorage.getItem("token") || null,
			user: null
		},
		actions: {
			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					return data;
				} catch(error) {
					console.log("Error loading message from backend", error)
				}
			},
			
			// Nuevas funciones de autenticación
			login: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email, password })
					});
					const data = await resp.json();
					if (resp.status === 200) {
						setStore({ 
							token: data.token,
							user: data 
						});
						localStorage.setItem("token", data.token);
						return true;
					}
					return false;
				} catch (error) {
					console.error("Login error:", error);
					return false;
				}
			},

			signup: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email, password })
					});
					return resp.status === 201;
				} catch (error) {
					console.error("Signup error:", error);
					return false;
				}
			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({ 
					token: null,
					user: null 
				});
			},

			validateToken: async () => {
				const store = getStore();
				if (!store.token) return false;
				
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/validate", {
						headers: {
							"Authorization": "Bearer " + store.token
						}
					});
					return resp.status === 200;
				} catch (error) {
					console.error("Token validation error:", error);
					return false;
				}
			}
		}
	};
};

export default getState;