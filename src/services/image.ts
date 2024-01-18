import apiAuth from "../core/apiAuth";

export const getUserData = (id:string) => apiAuth.get(`/profile/${id}`)