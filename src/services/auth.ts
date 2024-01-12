import apiAuth from "../core/apiAuth"

const token = localStorage.getItem('accessToken')

export const signin = (formData:any) => apiAuth.post("/login", formData);

export const signup = (formData:any) => apiAuth.post("/register/user", formData);

export const resetPassword = (formData:any) => apiAuth.post("/reset", formData);

export const changePassword = (formData:any, id:string | undefined) => apiAuth.post(`/changepassword/${id}`,formData, {
    headers:{'Authorization': `Bearer ${token}`}
})