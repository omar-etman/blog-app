import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users:[],
    tags:[],
    posts:[],
}

export const appSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setPosts:(state, payload) => {
            state.posts = payload
        },
        setUsers: (state, payload) => {
            state.users = payload
        },
        addPost: (state, payload) => {
            state.posts.push(payload)
        },
        updatePost: (state, payload) => {
            const postExists = state.posts.find((postExists) => {
                return postExists === payload.id
            })
            if(postExists){
                postExists.body = payload.body
            }
        },
        reactToPost: (state, payload) => {

            const reactions = state.posts.reactions

            const targetedPost = state.posts.find((targetedPost) => {
                return targetedPost.id === payload.id 
            })
            const previouslyReacted = reactions.find((previouslyReacted) => {
                return previouslyReacted.id === payload.id
            })

            if(targetedPost){
                state.posts[targetedPost].reactions.push(payload)
            }

            if(previouslyReacted){
                reactions[previouslyReacted].type = payload.value
            }
        },

        deletePost: (state, payload) => {
            state.posts = state.posts.filter((post) => post.id !== payload.id )
        }
    }
})

export const {
    setPosts,
    setUsers,
    setTags,
    addPost,
    updatePost,
    reactToPost,
    deletePost,
  } = appSlice.actions
  
  export default appSlice.reducer