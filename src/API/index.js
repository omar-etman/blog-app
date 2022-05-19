import axios from "axios"

const API = axios.create({baseURL: "http://localhost:3000/"})

export const getPosts = () => API.get("/posts")

export const getPostById = (postId) => API.get(`/posts/${postId}`)

export const updatePost =(postId, update) => API.put(`/comments/${postId}`, update)

export const getComments = () => API.get("/comments")

export const getUsers = () => API.get("/users")

export const createUser = (userInfo) => API.post(`/users/create`, userInfo)

export const addPost = (authorId, newPost) => API.post(`/posts/create/${authorId}`, newPost)

export const addComment = (postId, userId, newComment) => API.post(`comments/create/${postId}/${userId}`, newComment)

export const editComment = (commentId, edit) => API.put(`comments/edit/${commentId}`, edit)

export const react = (postId, userId, reaction) => API.post(`/reaction/${postId}/${userId}`, reaction)

export const getPostReactions = (postId) => API.get(`/reactions/${postId}`)