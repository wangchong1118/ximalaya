import { Model, Effect } from "dva-core-ts";
import { Reducer } from "react";
import { Action } from 'redux';

export interface HomeState {
    num: number;
}

interface HomeModel extends Model {
    namespace: 'home';
    state: HomeState;
    reducers: {
        add: Reducer<HomeState, Action>;
    };
    effects: {
        asyncAdd: Effect;
    }
}

const initState = {
    num: 1,
    // loading: false
}

function delay(timeout: number){
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

const homeModel: HomeModel = {
    namespace: 'home',
    state: initState,
    reducers: {
        add(state = initState){
            return {
                ...state,
                num: state.num + 5,
            }
        }
    },
    effects: {
        *asyncAdd({payload}, {call, put}) {
            yield call(delay, 2000);
            yield put({
                type: 'add',
                payload
            })
        }
    }
}

export default homeModel;