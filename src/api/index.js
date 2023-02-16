import axios from 'axios'

const API = axios.create({ baseURL: 'https://adventurous-blue-seahorse.cyclic.app' })

API.interceptors.request.use((req) => { //here we collected the interceptors of every requests,
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    } 
    return req;
})  /*in the req we are changing the headers to a new value called the authorization, 
    if that authorization is a string, we are going to have a bearer then space then the token, 
    we are sending token of each user to the database. In the db we are going to check if that token 
    is a valid token or not. If that a valid token, we allow the specific action. */

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value) => API.patch(`/questions/vote/${id}`, { value} )

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId })
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers})

export const getAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)