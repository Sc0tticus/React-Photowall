import _posts from '../data/posts'
import {combineReducers} from 'redux'

function addPost(post) {
    fetch(
        `http://localhost:4000/posts`, 
        {
            method: 'POST',
            body: JSON.stringify({ ...post, user_id: 1}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(res => res.json())
    .then(
        (result) => console.log('Post persisted:', result),
        (error) => console.log('Something went wrong!!!', error)
    )
}

function deletePost(postId) {
    fetch(`http://localhost:4000/posts/${postId}`, {method: 'DELETE'})
    .then(
        () => console.log('Successful delete of', postId),
        (error) => console.log('Something went wrong!!!', error)
    )
}

function comments(state={}, action) {
    switch (action.type) {
        case 'ADD_COMMENT':  
        
        if (!state[action.postId]) {
            return {...state, [action.postId]: [action.comment]}
        } else {
            return {...state, [action.postId]: [...state[action.postId], action.comment] }
        }
        
        default: return state
    }
    return state
}


function posts(state = [], action) {
    switch (action.type) {
        case 'REMOVE_POST': { 
            deletePost(action.index)

            const newState = state.filter(function( post ) {
                return post.id !== action.index;
            });

            return [...newState] }
        case 'UPDATE_POSTS': { 
            return [...state, ...action.posts]; 
        }
        case 'ADD_POST': { 
            addPost(action.post)
            return [...state, action.post] 
        }
        default: return state

    }

    
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer