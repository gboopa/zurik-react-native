

// Add DocumentUpload - CREATE (C)
// Add actions
export function documentUploadAddErrored(bool) {
    return {
        type: 'DOCUMENTUPLOAD_ADD_ERRORED',
        addErrored: bool
    };
}

export function documentUploadIsAdding(bool) {
    return {
        type: 'DOCUMENTUPLOAD_IS_ADDING',
        isAdding: bool
    };
}

export function documentUploadAddSuccess(documentUploads) {
    return {
        type: 'DOCUMENTUPLOADS_ADD_SUCCESS',
        documentUploads
    };
}
// Add DocumentUpload - ADD (U)
export function addDocumentUpload(documentUpload){
    return (dispatch) => {
        dispatch(documentUploadIsAdding(true));
        fetch(global.url+'createDocumentUpload',{
                method: 'POST',
                
                body: JSON.stringify(documentUpload),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(documentUploadIsAdding(false));
                return response;
            })
            .then((response) => dispatch(documentUploadAddSuccess(documentUpload)))
            .catch(() => dispatch(documentUploadAddErrored(true)));
    };
}

// ----------------------
export function documentUploadsHasErrored(bool) {
    return {
        type: 'DOCUMENTUPLOADS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function documentUploadsIsLoading(bool) {
    return {
        type: 'DOCUMENTUPLOADS_IS_LOADING',
        isLoading: bool
    };
}

export function documentUploadsFetchDataSuccess(documentUploads) {
    return {
        type: 'DOCUMENTUPLOADS_FETCH_DATA_SUCCESS',
        documentUploads
    };
}


export function getDocumentUploads(url) {
    return (dispatch) => {
        dispatch(documentUploadsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(documentUploadsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((documentUploads) => dispatch(documentUploadsFetchDataSuccess(documentUploads)))
            .catch(() => dispatch(documentUploadsHasErrored(true)));
    };
}



// Get Sngle DocumentUpload
export function documentUploadHasErrored(bool) {
    return {
        type: 'DOCUMENTUPLOAD_HAS_ERRORED',
        hasErrored: bool
    };
}

export function documentUploadIsLoading(bool) {
    return {
        type: 'DOCUMENTUPLOAD_IS_LOADING',
        isLoading: bool
    };
}

export function documentUploadFetchDataSuccess(documentUpload) {
    return {
        type: 'DOCUMENTUPLOAD_FETCH_DATA_SUCCESS',
        documentUpload
    };
}

export function resetSuccess() {
    return {
        type: 'DOCUMENTUPLOAD_RESET_SUCCESS',
        saveSuccessful: false
    };
}
export function getDocumentUpload(url) {
    return (dispatch) => {
        dispatch(resetSuccess());
        // dispatch(documentUploadIsLoading(true));
        // fetch(url)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }
        //         dispatch(documentUploadIsLoading(false));
        //         return response;
        //     })
        //     .then((response) => response.json())
        //     .then((documentUpload) => dispatch(documentUploadFetchDataSuccess(documentUpload)))
        //     .catch(() => dispatch(documentUploadHasErrored(true)));
    };
}



// // Update actions
// export function documentUploadUpdateErrored(bool) {
//     return {
//         type: 'DOCUMENTUPLOAD_UPDATE_ERRORED',
//         updateErrored: bool
//     };
// }

// export function documentUploadIsUpdating(bool) {
//     return {
//         type: 'DOCUMENTUPLOAD_IS_UPDATING',
//         isUpdating: bool
//     };
// }

// export function documentUploadUpdateSuccess(documentUploads) {
//     return {
//         type: 'DOCUMENTUPLOADS_UPDATE_SUCCESS',
//         documentUploads
//     };
// }
// // Update DocumentUpload - UPDATE (U)
// export function updateDocumentUpload(documentUpload){
//     return (dispatch) => {
//         dispatch(documentUploadIsUpdating(true));
//         fetch(global.url+'updateDocumentUpload',{
//                 method: 'POST',
                
//                 body: JSON.stringify(documentUpload),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 dispatch(documentUploadIsUpdating(false));
//                 return response;
//             })
//             .then((response) => dispatch(documentUploadUpdateSuccess(documentUpload)))
//             .catch(() => dispatch(documentUploadUpdateErrored(true)));
//     };
// }

// -------------------------------------------------


// Delete actions
export function documentUploadDeleteErrored(bool) {
    return {
        type: 'DOCUMENTUPLOAD_DELETE_ERRORED',
        deleteErrored: bool
    };
}

export function documentUploadIsDeleting(bool) {
    return {
        type: 'DOCUMENTUPLOAD_IS_DELETING',
        isDeleting: bool
    };
}

export function documentUploadDeleteSuccess(documentUploadId) {
    return {
        type: 'DOCUMENTUPLOAD_DELETE_SUCCESS',
        documentUploadId
    };
}
// Delete DocumentUpload - DELETE (U)
export function deleteDocumentUpload(documentUploadId){
    return (dispatch) => {
        dispatch(documentUploadIsDeleting(true));
        fetch(global.url+'documentUpload/'+documentUploadId,{
                method: 'DELETE'
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(documentUploadIsDeleting(false));
                return response;
            })
            .then((response) => dispatch(documentUploadDeleteSuccess(documentUploadId)))
            .catch(() => dispatch(documentUploadDeleteErrored(true)));
    };
}

