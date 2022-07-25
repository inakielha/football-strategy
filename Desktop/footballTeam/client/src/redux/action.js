
import axios from "axios"
export const GET_TEAMS = "GET_TEAMS"
export const CREATE_TEAM = "CREATE_TEAM"
export const SEARCH_TEAM = "SEARCH_TEAM"


export function getTeams (){
    return function (dispatch) {
        axios.get("http://localhost:4000/team/")
        .then((teams)=>{
            dispatch({
                type: GET_TEAMS,
                payload: teams.data
            })
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}
export function createTeam (input){
    return function(dispatch) {
        axios.post("http://localhost:4000/team/",input)
        .then((res)=>{
            dispatch({
                type: CREATE_TEAM,
                payload: {ok:res.data.ok}
            })
        })
        .catch((e)=>{
            console.log(e)
            dispatch({
                type: CREATE_TEAM,
                payload: {ok: false, msg: e}
            })
        })
    }
}
export function searchTeam(teamName){
    return function(dispatch) {
        console.log(teamName)
        axios.get("http://localhost:4000/team/teamSearch?teamName="+teamName)
        .then((res)=>{
            dispatch({
                type: SEARCH_TEAM,
                payload: res.data
            })
        })
        .catch((e)=>{
            console.log(e)
            dispatch({
                type: SEARCH_TEAM,
                payload: e
            })
        })
    }
}