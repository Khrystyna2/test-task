import axios from "axios";

export const addUser = userName =>
	axios
		.post("http://localhost:8081/api/user", { name: userName })
		.then(res => res.data)
		.catch(err => {
			throw err;
		});

export const allUsers = () =>
	axios
		.get("http://localhost:8081/api/users")
		.then(res => res.data)
		.catch(err => console.error(err));
