import style from "../../Home/TeamCard/TeamCard.module.css"


export default function CuatroDosDosDos({ setInput, input }) {
    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: { name: e.target.value, position: e.target.title, cssCode: e.target.id }

        })
    }
    return (
        <div className={style.infoContainer}>
            <div className={style.cuatroDosDosDos}>

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
                        name="two"
                        id="CB"
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
                        id="LB"
                        name="five"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CDM}>
                    <label>CDM</label>
                    <input
                        type="text"
                        title="CDM"
                        id="CDM"
                        name="six"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CDM1}>
                    <label>CDM</label>
                    <input
                        type="text"
                        id="CDM1"
                        title="CDM"
                        name="seven"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CAM}>
                    <label>CAM</label>
                    <input
                        type="text"
                        title="CAM"
                        id="CAM"
                        name="eight"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CAM1}>
                    <label>CAM</label>
                    <input
                        type="text"
                        title="CAM"
                        id="CAM1"
                        name="nine"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.ST}>
                    <label>ST</label>
                    <input
                        type="text"
                        title="ST"
                        name="ten"
                        id="ST"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.ST1}>
                    <label>ST</label>
                    <input
                        type="text"
                        title="ST"
                        name="eleven"
                        id="ST1"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
            </div>
        </div>
    )
}