import apiAuth from "../core/apiAuth"

const token = localStorage.getItem('accessToken')

export const fetchUser = async (id:string|undefined) => {
    try {
        const response = await apiAuth.get(`/profile/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response)
        return response
        
    } catch (error) {
        console.log(error)
    }
};

