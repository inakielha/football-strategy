import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../../redux/action";
import TeamCard from "../TeamCard/TeamCard";


export default function Landing(){
    const dispatch = useDispatch()
    const allTeams = useSelector((state)=> state.team)

    useEffect(()=>{
    dispatch(getTeams())
    },[])
    return (
        <div>
            {allTeams?.ok && allTeams.allTeams.map((team)=>{
                return(
                    <div key={team._id}>   
                        <TeamCard players={team.players} teamName={team.teamName} formation={team.formation}/>
                    </div>
                )
            })}
        </div>
    )
}