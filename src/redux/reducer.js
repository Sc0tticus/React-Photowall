import _posts from '../data/posts'
import {combineReducers} from 'redux'

function addPost(post) {
    fetch(
        `http://localhost:4000/posts/${post.id}`, 
        {
            method: 'POST',
            body: JSON.stringify(post)
        }
    )
    .then(res => res.json())
    .then(
        (result) => {
            console.log('SUCCESS!!! The result:', result)
            result.forEach(element => {
                this.props.addPost(element);
            })
        },

        (error) => { console.log('Shit, something went wrong!!!', error) }
    )
}

function deletePost(postId) {
    console.log("DELETE THE POST", postId)
    fetch(`http://localhost:4000/posts/${postId}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(
        (result) => { console.log('Successful delete of', postId) },
        (error) => { console.log('Shit, something went wrong!!!', error) }
    )
}

function updatePost(post) {
    fetch(
        `http://localhost:4000/posts/${post.id}`, 
        {
            method: 'PUT',
            body: JSON.stringify(post)
        }
    )
    .then(res => res.json())
    .then(
        (result) => { console.log('successful update of ', post) },
        (error) => { console.log('Oh no, something went wrong!!!', error) }
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


function posts(state = _posts, action) {
    switch (action.type) {
        case 'REMOVE_POST': { 
            deletePost(action.index)
            console.log('FCK', action.index)
            const newState = state.filter(function( post ) {
                return post.id !== action.index;
            });
            console.log("before, after", state, newState)
            return [...newState] }
        case 'UPDATE_POSTS': { 
            return [...state, action.posts]; 
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