const authReducer = (state= { data : null }, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile', JSON.stringify({...action?.data}))
            // '.stringify' uses to convert data into json as it comes from backend.
            // '?' is optional oparator if data exists it will run else it will throw an error. 
            // overall we will store the data in 'Profile' in the local storage.
            return { ...state, data: action?.data }
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null };
        default:
            return state;
    }
}

export default authReducer