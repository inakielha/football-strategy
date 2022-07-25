import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../../redux/action";
import TeamSearch from "../../TeamSearch/TeamSearch";
import TeamCard from "../TeamCard/TeamCard";
import style from "./Landing.module.css"


export default function Landing(){
    const dispatch = useDispatch()
    const allTeams = useSelector((state)=> state.team)

    useEffect(()=>{
    dispatch(getTeams())
    },[])
    return (
        <div className={style.contenedor}>
            <TeamSearch/>
            {allTeams?.ok && allTeams.allTeams.map((team)=>{
                return(
                    <div key={team._id}>   
                        <TeamCard players={team.players} teamName={team.teamName} shirt={team.shirt} formation={team.formation}/>
                    </div>
                )
            })}
        </div>
    )
}