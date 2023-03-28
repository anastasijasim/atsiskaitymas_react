import { LoginUser, NewUser, User } from "../types/user";

import axios from "axios"

const LOGIN_API_URL = "https://react-test-sejo6.ondigitalocean.app/v1/auth/login"
const REGISTER_API_URL = "https://react-test-sejo6.ondigitalocean.app/v1/auth/register"

export const createUser = (newUser: NewUser) =>{
    return axios
        .post(REGISTER_API_URL, newUser)
        .then ((response)=>response.data)
};


export const fetchUsers = () =>{
    return axios 
        .get(LOGIN_API_URL)
        .then((response) => response.data.data);
};

export const loginUser = async (loggingUser:LoginUser):Promise <User> => {
    const users = await fetchUsers();
    return new Promise ((resolve, reject) =>{
        const {email, password } = loggingUser;
        const userChecker = (u:User) => u.email ===email && u.password ===password;
        const existingUser = users.find (userChecker);
        existingUser? resolve(existingUser) : reject("Invalid credentials");
    });
}