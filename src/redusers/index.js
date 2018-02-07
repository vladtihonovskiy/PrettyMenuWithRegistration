import { combineReducers } from 'redux';

import tracks from './tracks';
import playlists from './playlists';
import menu from './menu';
import tableValue  from './tableValue';
import filter from './filter';

export default combineReducers({
    tracks,
    playlists,
    menu,
    tableValue,
    filter
});

// export  const AddNewValue=(state,action)=>{
//     console.log(fromTableValue.AddNewValue(state,action));
// }