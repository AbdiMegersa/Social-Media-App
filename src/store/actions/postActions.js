import {db} from '../../config/firebase'
import {addDoc, setDoc,doc, collection} from 'firebase/firestore'
 

export const createPost =  (post) => {

    return async (dispatch, getState) => {
        // carryout async call
       
        await addDoc(collection(db, 'posts'), {
            author_username: 'JohnDoe23',
            author_id: 223452,
            createdAt: new Date(),
            text: post.postText, 
        })
        
        dispatch({type: 'CREATE_POST', post})
        
    }
}