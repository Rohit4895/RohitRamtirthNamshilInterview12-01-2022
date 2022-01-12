import { BoxActions, NumberOfGrids, updateBoxData, updateSelectedArray } from "../../utils/Constants";
import { combineReducers } from "@reduxjs/toolkit";

const initialBoxState = {
    boxData: NumberOfGrids,
    selectedArr: []
};

export const getDetails = (state = initialBoxState , action) => {
    console.log("getDetails: ",state)
    switch(action.type){
        case BoxActions.SET_SELECTED_BOX:
            return {
                ...state,
                boxData: state.boxData.map((value, index) => {
                    if(value.value == action.payload.value){
                        return{
                            ...value,
                            isClicked: !value.isClicked
                        }
                    }else{
                        return value
                    }
                }),
                selectedArr: updateSelectedArray(state.selectedArr,action.payload.value)
            };
        default:
            return state;
    }
}

export default combineReducers({
    getDetails
})