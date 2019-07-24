const initialState = {
    user: {
        succes: false,
        field: true,
        msg: `Search for any Github user`
    }
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'UPDATE_DATA':
            return {
                user: action.payload
            }
            
        default :
            return state;
    }
}

export default reducer;