const initialState =  localStorage.getItem('Login') ===  'true'  ? ['Home', 'About', 'Contact','Product','Logout']:['Home', 'About', 'Contact','Product','Login']

export default function tracks(state = initialState, action) {
    if (action.type === 'LoginUser') {
        return ['Home', 'About', 'Contact','Product','Logout'];
    } else if (action.type === 'NotLoginUser') {
        return ['Home', 'About', 'Contact','Product','Login'];
    }
    return state;
}