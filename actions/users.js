

// Add User - CREATE (C)
// Add actions
export function userAddErrored(bool) {
    return {
        type: 'USER_ADD_ERRORED',
        addErrored: bool
    };
}

export function userIsAdding(bool) {
    return {
        type: 'USER_IS_ADDING',
        isAdding: bool
    };
}

export function userAddSuccess(users) {
    return {
        type: 'USERS_ADD_SUCCESS',
        users
    };
}
// Add User - ADD (U)
export function addUser(user){
    return (dispatch) => {
        dispatch(userIsAdding(true));
        fetch(global.url+'createUser',{
                method: 'POST',
                
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(userIsAdding(false));
                return response;
            })
            .then((response) => dispatch(userAddSuccess(user)))
            .catch(() => dispatch(userAddErrored(true)));
    };
}

// ----------------------
export function usersHasErrored(bool) {
    return {
        type: 'USERS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function usersIsLoading(bool) {
    return {
        type: 'USERS_IS_LOADING',
        isLoading: bool
    };
}

export function usersFetchDataSuccess(users) {
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}


export function getUsers(url) {
    return (dispatch) => {
        dispatch(usersIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(usersIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((users) => dispatch(usersFetchDataSuccess(users)))
            .catch(() => dispatch(usersHasErrored(true)));
    };
}

export function locationHasErrored(bool) {
    return {
        type: 'LOCATION_HAS_ERRORED',
        hasErrored: bool
    };
}
export function locationFetchDataSuccess(locations) {
    return {
        type: 'LOCATION_FETCH_DATA_SUCCESS',
        locations
    };
}

// get location detalis
export function getLocations(url)
{
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // dispatch(userIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((locations) => dispatch(locationFetchDataSuccess(locations)))
            .catch(() => dispatch(locationHasErrored(true)));
    };
}


// Get Sngle User
export function userHasErrored(bool) {
    return {
        type: 'USER_HAS_ERRORED',
        hasErrored: bool
    };
}

export function userIsLoading(bool) {
    return {
        type: 'USER_IS_LOADING',
        isLoading: bool
    };
}

export function userFetchDataSuccess(user) {
    return {
        type: 'USER_FETCH_DATA_SUCCESS',
        user
    };
}

export function resetSuccess() {
    return {
        type: 'USER_RESET_SUCCESS',
        saveSuccessful: false
    };
}
export function getUser(url) {
    return (dispatch) => {
        dispatch(resetSuccess());
        // dispatch(userIsLoading(true));
        // fetch(url)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }
        //         dispatch(userIsLoading(false));
        //         return response;
        //     })
        //     .then((response) => response.json())
        //     .then((user) => dispatch(userFetchDataSuccess(user)))
        //     .catch(() => dispatch(userHasErrored(true)));
    };
}



// Update actions
export function userUpdateErrored(bool) {
    return {
        type: 'USER_UPDATE_ERRORED',
        updateErrored: bool
    };
}

export function userIsUpdating(bool) {
    return {
        type: 'USER_IS_UPDATING',
        isUpdating: bool
    };
}

export function userUpdateSuccess(users) {
    return {
        type: 'USERS_UPDATE_SUCCESS',
        users
    };
}
// Update User - UPDATE (U)
export function updateUser(user){
    return (dispatch) => {
        dispatch(userIsUpdating(true));
        fetch(global.url+'updateUser',{
                method: 'POST',
                
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(userIsUpdating(false));
                return response;
            })
            .then((response) => dispatch(userUpdateSuccess(user)))
            .catch(() => dispatch(userUpdateErrored(true)));
    };
}

// -------------------------------------------------


// Delete actions
export function userDeleteErrored(bool) {
    return {
        type: 'USER_DELETE_ERRORED',
        deleteErrored: bool
    };
}

export function userIsDeleting(bool) {
    return {
        type: 'USER_IS_DELETING',
        isDeleting: bool
    };
}

export function userDeleteSuccess(userId) {
    return {
        type: 'USER_DELETE_SUCCESS',
        userId
    };
}
// Delete User - DELETE (U)
export function deleteUser(userId){
    return (dispatch) => {
        dispatch(userIsDeleting(true));
        fetch(global.url+'user/'+userId,{
                method: 'DELETE'
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(userIsDeleting(false));
                return response;
            })
            .then((response) => dispatch(userDeleteSuccess(userId)))
            .catch(() => dispatch(userDeleteErrored(true)));
    };
}



function getIndex(data, id){
    let clone = JSON.parse(JSON.stringify(data));
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}