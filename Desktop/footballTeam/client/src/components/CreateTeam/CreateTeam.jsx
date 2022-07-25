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
import naranja from "../../assets/naranja.png"
import violeta from "../../assets/violeta.png"
import verde from "../../assets/verde.png"
import rojo from "../../assets/rojo.png"
import blanco from "../../assets/blanco.png"
import azul from "../../assets/azul.png"
import aqua from "../../assets/aqua.png"
import amarillo from "../../assets/amarillo.png"
import negro from "../../assets/negro.png"

import style from "./CreateTeam.module.css"
import {Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';


export default function CreateTeam(){
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        teamNames: "",
        formation:"4-3-3",
        shirt: "blanco"
    })
    const [active, setActive] = useState("blanco")
    function handleSelect(e) {
        setInput({
            teamNames: input.teamNames,
            formation: e.target.value
        })
    }
    function handleInput(e){
        setInput({
            ...input,
            teamNames: e.target.value
        })
    }
    function handleShirt(e){
        setInput({
            ...input,
            shirt: e.target.alt
        })
        setActive(e.target.alt)
        // e.target.classList.toggle(style.active)
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(createTeam(input))
        console.log(input)
    }

    return(
        <Container className={style.container}>
            <h3>Create Team </h3>
            <form onSubmit={(e)=> handleSubmit(e)}>

            <div>
            {/* <InputGroup className="mb-3"> */}
            <Form.Label id="basic-addon1">Team Name</Form.Label>
            <Form.Control
            type="text"
            name="teamNames"
            value={input.teamNames}
            onChange= {(e)=>handleInput(e)}
            placeholder= "Barcelona fc e.g"
            // aria-describedby="basic-addon1"
            aria-label="Barcelona fc e.g"
            />
            {/* </InputGroup> */}
            {/* <input
            type="text"
            name="teamNames"
            value={input.teamNames}
            onChange= {(e)=>handleInput(e)}
            placeholder= "Barcelona fc e.g"
        /> */}
        <div>
            <Form.Label> Formation </Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e)=>handleSelect(e)}>
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
            
        </Form.Select>
        </div>
            </div>
            <ListGroup horizontal className={style.listContainer}>
                <ListGroup.Item><img src= {blanco} alt="blanco" className= {"blanco" === active? style.active: ""} onClick={(e)=>handleShirt(e)}/></ListGroup.Item>
                <ListGroup.Item><img src= {naranja} alt="naranja" className= {"naranja" === active? style.active: ""} onClick={(e)=>handleShirt(e)}/></ListGroup.Item>
                <ListGroup.Item><img src= {violeta} alt="violeta" className= {"violeta" === active? style.active: ""} onClick={(e)=>handleShirt(e)}/></ListGroup.Item>
                <ListGroup.Item><img  src= {verde} alt="verde" className= {"verde" === active? style.active: ""} onClick={(e)=>handleShirt(e)}/></ListGroup.Item>
                <ListGroup.Item><img src= {rojo} alt="rojo" className= {"rojo" === active? style.active: ""} onClick={(e)=>handleShirt(e)}/></ListGroup.Item>
                <ListGroup.Item><img src= {azul} alt="azul" className= {"azul" === active? style.active: ""} onClick={(e)=>handleShirt(e)}/></ListGroup.Item>
                <ListGroup.Item><img src= {aqua} alt="aqua" className= {"aqua" === active? style.active: ""} onClick={(e)=>handleShirt(e)}/></ListGroup.Item>
                <ListGroup.Item><img src= {amarillo} alt="amarillo" className= {"amarillo" === active? style.active: ""} onClick={(e)=>handleShirt(e)}/></ListGroup.Item>
                <ListGroup.Item><img src= {negro} alt="negro" className= {"negro" === active? style.active: ""} onClick={(e)=>handleShirt(e)}/></ListGroup.Item>
            </ListGroup>
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
            <div className={style.buttonContainer}>
                <button type="submit">Save Team</button>
                {/* <Button  variant="success">Save team</Button> */}
            </div>
            </form>






        </Container>
    )
}