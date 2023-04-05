//code to import data from firestore and at it as initial state;
import {query, collection, onSnapshot} from 'firebase/firestore'
import {db} from '../../config/firebase'


var initialState = {
    posts: []
}

const q = query(collection(db, 'posts'))
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach(doc => {
    initialState.posts.push({...doc.data(), id: doc.id})
    })
})


const postReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_POST':
            console.log('post created', action.post)
            return state
        case 'CREATE_POST_ERROR':
            console.log('create post error', action.err)
            return state
        default:
            return state
    }
}

export default postReducer;