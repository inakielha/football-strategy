import { useState } from "react"
import { useDispatch} from "react-redux"
import { searchTeam } from "../../redux/action"
import style from "./TeamSearch.module.css"


export default function TeamSearch(){
    
    const [teamName, setTeam] = useState("")
    const dispatch = useDispatch()

    function handleInput (e){
        setTeam(e.target.value)
    }
    function search() {
        dispatch(searchTeam(teamName))
    }
    return(
        <div className={style.contenedor}>
            <input type="text" placeholder="search team" onChange={(e)=>handleInput(e)} value={teamName}/>
            <button type="button" className={style.btn} onClick={()=>search()}>Find</button>
        </div>
    )
}