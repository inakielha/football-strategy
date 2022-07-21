import style from "../../Home/TeamCard/TeamCard.module.css"


export const CuatroTresDosUno = ({ setInput, input }) => {
    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: { name: e.target.value, position: e.target.title, cssCode: e.target.id }


        })
    }
    return (
        <div className={style.infoContainer}>
            <div className={style.cuatroTresDosUno}>

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
                        name="four"
                        id="RB"
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
                <div className={style.CM}>
                    <label>CM</label>
                    <input
                        type="text"
                        title="CM"
                        name="six"
                        id="CM"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CM1}>
                    <label>CM</label>
                    <input
                        type="text"
                        title="CM"
                        id="CM1"
                        name="seven"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CM2}>
                    <label>CM</label>
                    <input
                        type="text"
                        title="CM"
                        id="CM2"
                        name="eight"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                    <div className={style.RF}>
                    <label>RF</label>
                    <input
                        type="text"
                        title="RF"
                        id="RF"
                        name="nine"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.LF}>
                    <label>LF</label>
                    <input
                        type="text"
                        title="LF"
                        id="LF"
                        name="ten"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.ST}>
                    <label>ST</label>
                    <input
                        type="text"
                        title="ST"
                        id="ST"
                        name="eleven"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
            </div>
        </div>
    )
}