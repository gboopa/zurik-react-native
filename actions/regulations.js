

// Add Regulation - CREATE (C)
// Add actions
export function regulationAddErrored(bool) {
    return {
        type: 'REGULATION_ADD_ERRORED',
        addErrored: bool
    };
}

export function regulationIsAdding(bool) {
    return {
        type: 'REGULATION_IS_ADDING',
        isAdding: bool
    };
}

export function regulationAddSuccess(regulations) {
    return {
        type: 'REGULATIONS_ADD_SUCCESS',
        regulations
    };
}
// Add Regulation - ADD (U)
export function addRegulation(regulation){
    return (dispatch) => {
        dispatch(regulationIsAdding(true));
        fetch(global.url+'createRegulation',{
                method: 'POST',
                
                body: JSON.stringify(regulation),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(regulationIsAdding(false));
                return response;
            })
            .then((response) => dispatch(regulationAddSuccess(regulation)))
            .catch(() => dispatch(regulationAddErrored(true)));
    };
}

// ----------------------
export function regulationsHasErrored(bool) {
    return {
        type: 'REGULATIONS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function regulationsIsLoading(bool) {
    return {
        type: 'REGULATIONS_IS_LOADING',
        isLoading: bool
    };
}

export function regulationsFetchDataSuccess(regulations) {
    return {
        type: 'REGULATIONS_FETCH_DATA_SUCCESS',
        regulations
    };
}


export function getRegulations(url) {
    return (dispatch) => {
        dispatch(regulationsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(regulationsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((regulations) => dispatch(regulationsFetchDataSuccess(regulations)))
            .catch(() => dispatch(regulationsHasErrored(true)));
    };
}



// Get Sngle Regulation
export function regulationHasErrored(bool) {
    return {
        type: 'REGULATION_HAS_ERRORED',
        hasErrored: bool
    };
}

export function regulationIsLoading(bool) {
    return {
        type: 'REGULATION_IS_LOADING',
        isLoading: bool
    };
}

export function regulationFetchDataSuccess(regulation) {
    return {
        type: 'REGULATION_FETCH_DATA_SUCCESS',
        regulation
    };
}

export function resetSuccess() {
    return {
        type: 'REGULATION_RESET_SUCCESS',
        saveSuccessful: false
    };
}
export function getRegulation(url) {
    return (dispatch) => {
        dispatch(resetSuccess());
        // dispatch(regulationIsLoading(true));
        // fetch(url)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }
        //         dispatch(regulationIsLoading(false));
        //         return response;
        //     })
        //     .then((response) => response.json())
        //     .then((regulation) => dispatch(regulationFetchDataSuccess(regulation)))
        //     .catch(() => dispatch(regulationHasErrored(true)));
    };
}



// Update actions
export function regulationUpdateErrored(bool) {
    return {
        type: 'REGULATION_UPDATE_ERRORED',
        updateErrored: bool
    };
}

export function regulationIsUpdating(bool) {
    return {
        type: 'REGULATION_IS_UPDATING',
        isUpdating: bool
    };
}

export function regulationUpdateSuccess(regulations) {
    return {
        type: 'REGULATIONS_UPDATE_SUCCESS',
        regulations
    };
}
// Update Regulation - UPDATE (U)
export function updateRegulation(regulation){
    return (dispatch) => {
        dispatch(regulationIsUpdating(true));
        fetch(global.url+'updateRegulation',{
                method: 'POST',
                
                body: JSON.stringify(regulation),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(regulationIsUpdating(false));
                return response;
            })
            .then((response) => dispatch(regulationUpdateSuccess(regulation)))
            .catch(() => dispatch(regulationUpdateErrored(true)));
    };
}

// -------------------------------------------------


// Delete actions
export function regulationDeleteErrored(bool) {
    return {
        type: 'REGULATION_DELETE_ERRORED',
        deleteErrored: bool
    };
}

export function regulationIsDeleting(bool) {
    return {
        type: 'REGULATION_IS_DELETING',
        isDeleting: bool
    };
}

export function regulationDeleteSuccess(regulationId) {
    return {
        type: 'REGULATION_DELETE_SUCCESS',
        regulationId
    };
}
// Delete Regulation - DELETE (U)
export function deleteRegulation(regulationId){
    return (dispatch) => {
        dispatch(regulationIsDeleting(true));
        fetch(global.url+'regulation/'+regulationId,{
                method: 'DELETE'
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(regulationIsDeleting(false));
                return response;
            })
            .then((response) => dispatch(regulationDeleteSuccess(regulationId)))
            .catch(() => dispatch(regulationDeleteErrored(true)));
    };
}

// Client side actions
// ----------------------
export function regulationTrackersHasErrored(bool) {
    return {
        type: 'REGULATIONTRACKERS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function regulationTrackersIsLoading(bool) {
    return {
        type: 'REGULATIONTRACKERS_IS_LOADING',
        isLoading: bool
    };
}

export function regulationTrackersFetchDataSuccess(regulationTrackers) {
    return {
        type: 'REGULATIONTRACKERS_FETCH_DATA_SUCCESS',
        regulationTrackers
    };
}


export function getRegulationTrackers(url) {
    return (dispatch) => {
        dispatch(regulationTrackersIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(regulationTrackersIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((regulationTrackers) => dispatch(regulationTrackersFetchDataSuccess(regulationTrackers)))
            .catch(() => dispatch(regulationTrackersHasErrored(true)));
    };
}

function getIndex(data, id){
    let clone = JSON.parse(JSON.stringify(data));
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}