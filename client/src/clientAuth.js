import axios from 'axios'
import jwtDecode from 'jwt-decode'

const clientAuth = axios.create()
clientAuth.defaults.headers.common.token = getToken()

function getToken(){
    return localStorage.getItem('token')
}

function setToken(token){
    localStorage.setItem('token', token)
    return token
}

function getCurrentUser(){
    const token = getToken()
    if(token) return jwtDecode(token)
    return null
}

function logIn(credentials) {
    return clientAuth({method: 'post', url: '/api/users/authenticate', data: credentials})
    .then(res => {
        const token = res.data.token
        if(token) {
            //set token as header for all following api requests
            clientAuth.defaults.headers.common.token = setToken(token)
            return jwtDecode(token)
        } else {
            return false
        }
    })
}

function signUp(userInfo) {
    return clientAuth({method: 'post', url: '/api/users', data: userInfo})
    .then(res => {
        const token = res.data.token
        if(token) {
            //sets token like above
            clientAuth.defaults.headers.common.token = setToken(token)
            return jwtDecode(token)
        } else {
            return false
        }
    })
}

function logOut(){
    localStorage.removeItem('token')
    delete clientAuth.defaults.headers.common.token
    return true
}

function getParties(){
    return clientAuth({ method: 'get', url: '/api/parties'})
}

function createParty(fields) {
	return clientAuth({ method: 'post', url: '/api/parties', data: fields })
}

function getParty(id){
    return clientAuth({method:'get', url: `/api/parties/${id}` })
}

function updateParty(id, fields) {
    return clientAuth({ method: 'patch', url: `/api/parties/${id}`, data:fields})
}

export default {
    getCurrentUser,
    logIn, 
    signUp,
    logOut, 
    getParties, 
    createParty, 
    getParty,
    updateParty
    
}