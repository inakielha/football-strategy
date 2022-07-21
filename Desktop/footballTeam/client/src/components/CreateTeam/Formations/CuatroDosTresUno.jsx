import style from "../../Home/TeamCard/TeamCard.module.css"


export default function CuatroDosTresUno({ setInput, input }) {
    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: { name: e.target.value, position: e.target.title, cssCode: e.target.id }


        })
    }
    return (
        <div className={style.infoContainer}>
            <div className={style.cuatroDosTresUno}>

                <div className={style.GK}>
                    <label>GK</label>
                    <input
                        type="text"
                        title="GK"
                        name="one"
                        id="GK"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CB}>
                    <label>CB</label>
                    <input
                        type="text"
                        title="CB"
                        id="CB"
                        name="two"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CB1}>
                    <label>CB</label>
                    <input
                        type="text"
                        title="CB"
                        id="CB1"
                        name="three"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.RB}>
                    <label>RB</label>
                    <input
                        type="text"
                        title="RB"
                        id="RB"
                        name="four"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.LB}>
                    <label>LB</label>
                    <input
                        type="text"
                        title="LB"
                        name="five"
                        id="LB"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CDM}>
                    <label>CDM</label>
                    <input
                        type="text"
                        title="CDM"
                        name="six"
                        id="CDM"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CDM1}>
                    <label>CDM</label>
                    <input
                        type="text"
                        title="CDM"
                        name="seven"
                        id="CDM1"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CAM}>
                    <label>CAM</label>
                    <input
                        type="text"
                        title="CAM"
                        name="eight"
                        id="CAM"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.RM}>
                    <label>RM</label>
                    <input
                        type="text"
                        title="RM"
                        name="nine"
                        id="RM"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.LM}>
                    <label>LM</label>
                    <input
                        type="text"
                        title="LM"
                        name="ten"
                        id="LM"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.ST}>
                    <label>ST</label>
                    <input
                        type="text"
                        title="ST"
                        name="eleven"
                        id="ST"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
            </div>
        </div>
    )
}