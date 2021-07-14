//@ts-nocheck
import * as types from "../types";
import redux from "redux"

export const rootReducer = (state, action) => {
	switch(action.type){
		case types.INCREASE:
			return{
				...state,
				da:"asd",
				zxc:action.zxc
			}
		default:
			return state
	}
}