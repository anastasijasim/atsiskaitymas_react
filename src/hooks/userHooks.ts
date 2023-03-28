import {createUser, loginUser} from "../api/userApi";

import { useMutation } from "react-query";

export const useCreateUser = () =>{
    return useMutation(createUser);
};

export const useLoginUser = () => {
    return useMutation(loginUser);
  };