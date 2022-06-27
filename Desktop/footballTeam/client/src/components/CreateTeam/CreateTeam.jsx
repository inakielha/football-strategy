import { useState } from "react"
import { CuatroTresDosUno } from "./Formations/CuatroTresDosUno"
import CuatroCuatroDos from "./Formations/CuatroCuatroDos"
import CuatroDosTresUno from "./Formations/CuatroDosTresUno"
import CuatroTresTres from "./Formations/CuatroTresTres"
import CuatroTresUnoDos from "./Formations/CuatroTresUnoDos"
import { TresCuatroUnoDos } from "./Formations/TresCuatroUnoDos"
import { TresCuatroTres } from "./Formations/TresCuatroTres"
import CuatroDosDosDos from "./Formations/CuatroDosDosDos"
import { CincoTresDos } from "./Formations/CincoTresDos"
import CincoDosDosUno from "./Formations/CincoDosDosUno"
import { useDispatch } from "react-redux"
import { createTeam } from "../../redux/action"


export default function CreateTeam(){
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        teamName: "",
        formation:"4-3-3",
    })
    function handleSelect(e) {
        setInput({
            teamName: input.teamName,
            formation: e.target.value
        })
    }
    function handleInput(e){
        setInput({
            ...input,
            teamName: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(createTeam(input))
        console.log("hola")
    }
    return(
        <div>
            <h3>Create Team </h3>
            <form onSubmit={(e)=> handleSubmit(e)}>

            <div>
                <p>Formation</p>
            <select onChange={(e)=>handleSelect(e)}>
                <option>4-3-3</option>
                <option>4-4-2</option>
                <option>4-2-3-1</option>
                <option>4-3-1-2</option>
                <option>3-4-1-2</option>
                <option>3-4-3</option>
                <option>4-3-2-1</option>
                <option>4-2-2-2</option>
                <option>5-3-2</option>
                <option>5-2-2-1</option>
                
            </select>
            </div>
            <div>
                <label> Team Name:</label>
            <input
            type="text"
            name="teamName"
            value={input.teamName}
            onChange= {(e)=>handleInput(e)}
            placeholder= "Barcelona fc e.g"
            />
            </div>
            <div>
                <p>position</p>
                <p>Player Name</p>
                <p>Remove</p>
            </div>
            {input.formation=== "4-3-3" && <CuatroTresTres setInput={setInput} input={input}/>}
            {input.formation=== "4-4-2" && <CuatroCuatroDos setInput={setInput} input={input}/>}
            {input.formation==="4-2-3-1" && <CuatroDosTresUno setInput={setInput} input={input}/>}
            {input.formation==="4-3-1-2" && <CuatroTresUnoDos setInput={setInput} input={input}/>}
            {input.formation==="3-4-1-2" && <TresCuatroUnoDos setInput={setInput} input={input}/>}
            {input.formation==="3-4-3" && <TresCuatroTres setInput={setInput} input={input}/>}
            {input.formation==="4-3-2-1" && <CuatroTresDosUno setInput={setInput} input={input}/>}
            {input.formation==="4-2-2-2" && <CuatroDosDosDos setInput={setInput} input={input}/>}
            {input.formation==="5-3-2" && <CincoTresDos setInput={setInput} input={input}/>}
            {input.formation==="5-2-2-1" && <CincoDosDosUno setInput={setInput} input={input}/>}
            <div>
                <button type="submit">Save Team</button>
            </div>
            </form>






        </div>
    )
}