import { combineReducers } from 'redux';

// import { QUOTES_AVAILABLE, ADD_QUOTE, UPDATE_QUOTE, DELETE_QUOTE } from "../actions/" //Import the actions types constant we defined in our actions

let dataState = { quotes: [], loading:true };

// const dataReducer = (state = dataState, action) => {
//     switch (action.type) {
//         case ADD_QUOTE:{
//             let quotes =  cloneObject(state.quotes) //clone the current state
//             quotes.unshift(action.quote); //add the new quote to the top
//             state = Object.assign({}, state, { quotes: quotes});
//             return state;
//         }

//         case QUOTES_AVAILABLE:
//             state = Object.assign({}, state, { quotes: action.quotes, loading:false });
//             return state;

//         case UPDATE_QUOTE:{
//             let quote = action.quote;
//             let quotes =  cloneObject(state.quotes) //clone the current state
//             let index = getIndex(quotes, quote.id); //find the index of the quote with the quote id passed
//             if (index !== -1) {
//                 quotes[index]['author'] = quote.author;
//                 quotes[index]['text'] = quote.text;
//             }
//             state = Object.assign({}, state, { quotes: quotes});
//             return state;
//         }

//         case DELETE_QUOTE:{
//             let quotes =  cloneObject(state.quotes) //clone the current state
//             let index = getIndex(quotes, action.id); //find the index of the quote with the id passed
//             if(index !== -1) quotes.splice(index, 1);//if yes, undo, remove the QUOTE
//             state = Object.assign({}, state, { quotes: quotes});
//             return state;
//         }


//         default:
//             return state;
//     }
// };


const userInitialState = {users: [],user: {}};
const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case 'USERS_HAS_ERRORED':
            return { ...state, usersErrored: action.hasErrored, usersLoading: false };
        case 'USERS_IS_LOADING':
            return { ...state, usersLoading: action.isLoading };
        case 'USERS_FETCH_DATA_SUCCESS':
            console.log('!!!!!!!!!!reducers!!',action.users);
            return  { ...state, usersLoading: false, users: action.users};

        case 'USER_RESET_SUCCESS' :
            return {...state, saveSuccessful:false}
        case 'USER_HAS_ERRORED':
            return { ...state, userErrored: action.hasErrored, userLoading: false };
        case 'USER_IS_LOADING':
            return { ...state, userLoading: action.isLoading, saveSuccessful:false };
        case 'USER_FETCH_DATA_SUCCESS':
            console.log(action.user);
            return  { ...state, userLoading: false, user: action.user};            

        case 'LOCATION_HAS_ERRORED':
            console.log('!!!!!!!!!!!!! errrrorrrr');
            return { ...state, locationErrored: action.hasErrored, userLoading: false };
        case 'LOCATION_FETCH_DATA_SUCCESS':
            // console.log('??????????',action.locations);
            return  { ...state, userLoading: false, locations: action.locations};  

        case 'USER_ADD_ERRORED':
            return { ...state, userAddErrored: action.updateErrored, userAdding: false, saveSuccessful: false };
        case 'USER_IS_ADDING':
            return { ...state, userAdding: action.isAdding, saveSuccessful: false };
        case 'USERS_ADD_SUCCESS':
            // console.log(action.users);
            return  { ...state, userAdding: false, saveSuccessful:true};   

        case 'USER_UPDATE_ERRORED':
            return { ...state, userUpdateErrored: action.updateErrored, userUpdating: false, saveSuccessful: false };
        case 'USER_IS_UPDATING':
            return { ...state, userUpdating: action.isUpdating, saveSuccessful: false  };
        case 'USERS_UPDATE_SUCCESS':
            // console.log(action.users);
            return  { ...state, userUpdating: false, saveSuccessful:true};   

        case 'USER_DELETE_ERRORED':
            return { ...state, userDeleteErrored: action.deleteErrored, userDeleting: false, saveSuccessful: false };
        case 'USER_IS_DELETING':
            return { ...state, userDeleting: action.isDeleting, saveSuccessful: false  };
        case 'USER_DELETE_SUCCESS':
            console.log('!!!!! reducers delete successful');
            // console.log(action.users);
            return  { ...state, userDeleting: false, saveSuccessful:true};                  
        default:
            return state;
    }

};  

const regulationInitialState = {regulations: [],regulation: {}};
const regulationReducer = (state = regulationInitialState, action) => {
    switch (action.type) {
        case 'REGULATIONS_HAS_ERRORED':
            return { ...state, regulationsErrored: action.hasErrored, regulationsLoading: false };
        case 'REGULATIONS_IS_LOADING':
            return { ...state, regulationsLoading: action.isLoading };
        case 'REGULATIONS_FETCH_DATA_SUCCESS':
            console.log('!!!!!!!!!!reducers!!',action.regulations);
            return  { ...state, regulationsLoading: false, regulations: action.regulations};

        case 'REGULATION_RESET_SUCCESS' :
            return {...state, saveSuccessful:false}
        case 'REGULATION_HAS_ERRORED':
            return { ...state, regulationErrored: action.hasErrored, regulationLoading: false };
        case 'REGULATION_IS_LOADING':
            return { ...state, regulationLoading: action.isLoading, saveSuccessful:false };
        case 'REGULATION_FETCH_DATA_SUCCESS':
            console.log(action.regulation);
            return  { ...state, regulationLoading: false, regulation: action.regulation};            

        case 'REGULATION_ADD_ERRORED':
            return { ...state, regulationAddErrored: action.updateErrored, regulationAdding: false, saveSuccessful: false };
        case 'REGULATION_IS_ADDING':
            return { ...state, regulationAdding: action.isAdding, saveSuccessful: false };
        case 'REGULATIONS_ADD_SUCCESS':
            // console.log(action.regulations);
            return  { ...state, regulationAdding: false, saveSuccessful:true};   

        case 'REGULATION_UPDATE_ERRORED':
            return { ...state, regulationUpdateErrored: action.updateErrored, regulationUpdating: false, saveSuccessful: false };
        case 'REGULATION_IS_UPDATING':
            return { ...state, regulationUpdating: action.isUpdating, saveSuccessful: false  };
        case 'REGULATIONS_UPDATE_SUCCESS':
            // console.log(action.regulations);
            return  { ...state, regulationUpdating: false, saveSuccessful:true};   

        case 'REGULATION_DELETE_ERRORED':
            return { ...state, regulationDeleteErrored: action.deleteErrored, regulationDeleting: false, saveSuccessful: false };
        case 'REGULATION_IS_DELETING':
            return { ...state, regulationDeleting: action.isDeleting, saveSuccessful: false  };
        case 'REGULATION_DELETE_SUCCESS':
            console.log('!!!!! reducers delete successful');
            // console.log(action.regulations);
            return  { ...state, regulationDeleting: false, saveSuccessful:true};                  
        default:
            return state;
    }

};  


const documentUploadInitialState = {documentUploads: [],documentUpload: {}};
const documentUploadReducer = (state = documentUploadInitialState, action) => {
    switch (action.type) {
        case 'DOCUMENTUPLOADS_HAS_ERRORED':
            return { ...state, documentUploadsErrored: action.hasErrored, documentUploadsLoading: false };
        case 'DOCUMENTUPLOADS_IS_LOADING':
            return { ...state, documentUploadsLoading: action.isLoading };
        case 'DOCUMENTUPLOADS_FETCH_DATA_SUCCESS':
            console.log('!!!!!!!!!!reducers!!',action.documentUploads);
            return  { ...state, documentUploadsLoading: false, documentUploads: action.documentUploads};

        case 'DOCUMENTUPLOAD_RESET_SUCCESS' :
            return {...state, saveSuccessful:false}
        case 'DOCUMENTUPLOAD_HAS_ERRORED':
            return { ...state, documentUploadErrored: action.hasErrored, documentUploadLoading: false };
        case 'DOCUMENTUPLOAD_IS_LOADING':
            return { ...state, documentUploadLoading: action.isLoading, saveSuccessful:false };
        case 'DOCUMENTUPLOAD_FETCH_DATA_SUCCESS':
            console.log(action.documentUpload);
            return  { ...state, documentUploadLoading: false, documentUpload: action.documentUpload};            

        case 'DOCUMENTUPLOAD_ADD_ERRORED':
            return { ...state, documentUploadAddErrored: action.updateErrored, documentUploadAdding: false, saveSuccessful: false };
        case 'DOCUMENTUPLOAD_IS_ADDING':
            return { ...state, documentUploadAdding: action.isAdding, saveSuccessful: false };
        case 'DOCUMENTUPLOADS_ADD_SUCCESS':
            // console.log(action.documentUploads);
            return  { ...state, documentUploadAdding: false, saveSuccessful:true};   

        // case 'DOCUMENTUPLOAD_UPDATE_ERRORED':
        //     return { ...state, documentUploadUpdateErrored: action.updateErrored, documentUploadUpdating: false, saveSuccessful: false };
        // case 'DOCUMENTUPLOAD_IS_UPDATING':
        //     return { ...state, documentUploadUpdating: action.isUpdating, saveSuccessful: false  };
        // case 'DOCUMENTUPLOADS_UPDATE_SUCCESS':
        //     // console.log(action.documentUploads);
        //     return  { ...state, documentUploadUpdating: false, saveSuccessful:true};   

        case 'DOCUMENTUPLOAD_DELETE_ERRORED':
            return { ...state, documentUploadDeleteErrored: action.deleteErrored, documentUploadDeleting: false, saveSuccessful: false };
        case 'DOCUMENTUPLOAD_IS_DELETING':
            return { ...state, documentUploadDeleting: action.isDeleting, saveSuccessful: false  };
        case 'DOCUMENTUPLOAD_DELETE_SUCCESS':
            console.log('!!!!! reducers delete successful');
            // console.log(action.documentUploads);
            return  { ...state, documentUploadDeleting: false, saveSuccessful:true};                  
        default:
            return state;
    }

};  

// Client side code
// ------------------
const regulationTrackerInitialState = {regulationTrackers: [],regulationTracker: {}};
const regulationTrackerReducer = (state = regulationTrackerInitialState, action) => {
    switch (action.type) {
        case 'REGULATIONTRACKERS_HAS_ERRORED':
            return { ...state, regulationTrackersErrored: action.hasErrored, regulationTrackersLoading: false };
        case 'REGULATIONTRACKERS_IS_LOADING':
            return { ...state, regulationTrackersLoading: action.isLoading };
        case 'REGULATIONTRACKERS_FETCH_DATA_SUCCESS':
            console.log('!!!!!!!!!!reducers!!',action.regulationTrackers);
            return  { ...state, regulationTrackersLoading: false, regulationTrackers: action.regulationTrackers};

        case 'REGULATIONTRACKER_RESET_SUCCESS' :
            return {...state, saveSuccessful:false}
        case 'REGULATIONTRACKER_HAS_ERRORED':
            return { ...state, regulationTrackerErrored: action.hasErrored, regulationTrackerLoading: false };
        case 'REGULATIONTRACKER_IS_LOADING':
            return { ...state, regulationTrackerLoading: action.isLoading, saveSuccessful:false };
        case 'REGULATIONTRACKER_FETCH_DATA_SUCCESS':
            console.log(action.regulationTracker);
            return  { ...state, regulationTrackerLoading: false, regulationTracker: action.regulationTracker};            
               
        default:
            return state;
    }

}; 

// not used this separate routers
export function usersHasErrored(state = false, action) {
    switch (action.type) {
        case 'USERS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function usersIsLoading(state = false, action) {
    switch (action.type) {
        case 'USERS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function users(state = [], action) {
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
        console.log(action.users);
            return action.users;
        default:
            return state;
    }
}







function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}

function getIndex(data, id){
    let clone = JSON.parse(JSON.stringify(data));
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}

// Combine all the reducers
// const rootReducer = combineReducers({
//     userReducer
//     users,
//     usersHasErrored,
//     usersIsLoading
// })
const rootReducer = combineReducers({
    userReducer,
    regulationReducer,
    documentUploadReducer,
    regulationTrackerReducer
})

export default rootReducer;