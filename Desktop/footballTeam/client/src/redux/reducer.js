import { CREATE_TEAM, GET_TEAMS, SEARCH_TEAM } from "./action";



const initialState = {
    players: [],
    team: "",
    createResponse: ""
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
        case GET_TEAMS:
            console.log(action.payload)
            return {
                ...state,
                team: action.payload
            }
        case CREATE_TEAM:
            return {
                ...state,
                createResponse: action.payload
            }
        case SEARCH_TEAM:
            return {
                ...state,
                team: action.payload
            }
    }

}