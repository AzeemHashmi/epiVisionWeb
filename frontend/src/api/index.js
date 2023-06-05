//http://localhost:8000/auth/users/



import axios from 'axios'


const API_AUTH = axios.create({baseURL:'http://localhost:8000'})
const API = axios.create({baseURL:'http://localhost:8000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('epivision_auth')){
        req.headers.authorization = `JWT ${JSON.parse(localStorage.getItem('epivision_auth')).access}`;
    }

    return req;
})


// Auth APIs
export const signUp = (formData) =>API_AUTH.post('/auth/users/', formData)
export const signIn = (formData) =>API_AUTH.post('/auth/jwt/create/', formData)
export const verifyToken = (token) =>API_AUTH.post('/auth/jwt/verify/', token)
export const activateAccount = (formData) =>API_AUTH.post('/auth/users/activation/', formData)




export const getProfile = () =>API.get('/auth/users/me/')

