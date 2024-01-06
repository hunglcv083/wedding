import { IUser } from "../common/types/User" 
import apiAuth from "../core/apiAuth"


export const signin = (formData:any) => apiAuth.post("/login", formData);

export const signup = (formData:any) => apiAuth.post("/register/user", formData);

export const resetPassword = (formData:any) => apiAuth.post("/reset", formData);
        