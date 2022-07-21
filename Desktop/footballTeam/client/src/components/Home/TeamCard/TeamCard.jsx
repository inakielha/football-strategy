import style from "./TeamCard.module.css"
import Draggable from "react-draggable"
import naranja from "../../../assets/naranja.png"
import violeta from "../../../assets/violeta.png"
import verde from "../../../assets/verde.png"
import rojo from "../../../assets/rojo.png"
import blanco from "../../../assets/blanco.png"
import azul from "../../../assets/azul.png"
import aqua from "../../../assets/aqua.png"
import amarillo from "../../../assets/amarillo.png"
import negro from "../../../assets/negro.png"






export default function TeamCard({ players, teamName, shirt, formation }) {
    let estilo = ""
    let remera = ""
    console.log(shirt);
    if (formation === "4-3-3") estilo = "cuatroTresTres"
    if (formation === "5-2-2-1") estilo = "cincoDosDosUno"
    if (formation === "5-3-2") estilo = "cincoTresDos"
    if (formation === "4-4-2") estilo = "cuatroCuatroDos"
    if (formation === "4-2-2-2") estilo = "cuatroDosDosDos"
    if (formation === "4-2-3-1") estilo = "cuatroDosTresUno"
    if (formation === "4-3-2-1") estilo = "cuatroTresDosUno"
    if (formation === "4-3-1-2") estilo = "cuatroTresUnoDos"
    if (formation === "3-4-3") estilo = "tresCuatroTres"
    if (formation === "3-4-1-2") estilo = "tresCuatroUnoDos"

    if (shirt === "amarillo") remera = amarillo
    if (shirt === "naranja") remera = naranja
    if (shirt === "blanco") remera = blanco
    if (shirt === "rojo") remera = rojo
    if (shirt === "azul") remera = azul
    if (shirt === "aqua") remera = aqua
    if (shirt === "verde") remera = verde
    if (shirt === "violeta") remera = violeta
    if (shirt === "negro") remera = negro



    return (
        <div >
            <div className={style.nameContainer}>
                <h3 className={style.teamName}>{teamName}</h3>
                <h4 className={style.teamName}>{formation}</h4>
            </div>
            <div className={style.infoContainer}>
                <div className={style[estilo]}>
                    {players?.map((element) => {
                        return (
                            <Draggable>
                                <div className={style[element.cssCode]}>
                                    {element.position === "GK" ? <img src= {remera === amarillo ? negro : amarillo} alt="remeraarquero" className={style.imagen}/> : <img src={remera ? remera : negro} alt="remera" className={style.imagen}/>}
                                    <p className={style.jugador}>{element.name}</p>
                                    <p className={style.position}>{element.position} </p>
                                </div>
                            </Draggable>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}