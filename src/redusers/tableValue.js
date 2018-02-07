const initialState = {'headers':'','SelfoneData':''};

export default function tracks(state = initialState, action) {
    if (action.type === 'ADD_TELEPHONE') {
        let mas={'headers':state.headers,'SelfoneData':action.data};
        console.log(state);
        console.log(mas);
        return state =mas;
    } else if (action.type === 'DELETE_TRACK') {
        return state;
    } else if(action.type==='SORTED'){

        let type;
        let mas={...state.headers};
        if(state.headers[action.name]===''){
            mas[action.name]='true';
            type=true;
        }else if(state.headers[action.name]==='true') {
            mas[action.name]='false';
            type=false;
        }
        else if (state.headers[action.name]==='false'){
            mas[action.name]='true';
            type=true;
        }
        let name=action.name;
        console.log(mas);
        return Object.assign({}, state, {
            SelfoneData : state.SelfoneData.sort(function(a, b){
                if(type) {
                    if (a[name] < b[name]) return -1;
                    if (a[name] > b[name]) return 1;
                    return 0;
                }else{
                    if (a[name] < b[name]) return 1;
                    if (a[name] > b[name]) return -1;
                    return 0;
                }
            }),
            headers:mas
        });



    }else if (action.type==='HEADER_CREATE'){
       let mas={'headers':action.headers,'SelfoneData':state.SelfoneData};
        return state =mas;

    }else if (action.type==='ADD_NEW_VALUE'){
        return Object.assign({}, state, {
            SelfoneData : [...state.SelfoneData ,action.masData]
            });
    }
    else if (action.type ==='CHANGE_VALUE'){
        let mas=state;
        let lineId =action.masData.lineId;
        let valueAdd = action.masData.mas;
        for (let key in valueAdd) {
            mas.SelfoneData[lineId][key]=valueAdd[key];
        }
        state=mas;
        return state;
    }
    return state;

}