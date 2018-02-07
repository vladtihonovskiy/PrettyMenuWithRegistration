const initialState ='';

export default function filter(state = initialState, action) {
    if (action.type === 'SEARCH_PARAMS') {
        return state = action.value;
    }
    return state;
}