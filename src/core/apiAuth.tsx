import axios from 'axios'
const apiAuth = axios.create({
    baseURL: 'https://metatechvn.store'
})

apiAuth.interceptors.response.use(
    (response) => {
        const token = localStorage.getItem("accessToken");
      if (token) {
        response.headers.Authorization = `Bearer ${token}`;
      }
        return response.data
    },
    function (error) {
        return Promise.reject(error)
    }
)
export default apiAuth