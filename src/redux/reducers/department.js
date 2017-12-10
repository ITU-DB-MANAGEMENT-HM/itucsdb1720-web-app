import {actions} from "../../constants";

const {
    FETCH,
    FETCH_FAIL,
    FETCH_SUCCESS
} = actions.lecturers;

const initialState = {
    isClicked: false,
    isLoading: false
};

export default (state = initialState, action) =>{

    const {type, payload} = action;

    switch(type){

        case FETCH:
            return {...state, isLoading: true};
        case FETCH_FAIL:
            return {...state};
        case FETCH_SUCCESS:
            return {...state, isClicked: true};
        default:
            return {...state};
    }

}