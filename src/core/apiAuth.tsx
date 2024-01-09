import axios from 'axios'
const apiAuth = axios.create({
    baseURL: 'https://metatechvn.store'
})

apiAuth.interceptors.response.use(
    function (error) {
        return Promise.reject(error)
    }
)
export default apiAuth