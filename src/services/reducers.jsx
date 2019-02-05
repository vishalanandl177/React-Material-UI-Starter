
const initialState = { };

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH': 
            return {
                ...state,
                user: action.user
            };
        case 'CHECK_AUTH':
            return state;
        default: return state;
    }
};

export default reducers;