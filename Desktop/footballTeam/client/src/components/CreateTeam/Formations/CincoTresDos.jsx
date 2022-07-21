import style from "../../Home/TeamCard/TeamCard.module.css"


export const CincoTresDos = ({ setInput, input }) => {
    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: { name: e.target.value, position: e.target.title, cssCode: e.target.id }
        })
    }
    return (
        <div className={style.infoContainer}>
            <div className={style.cincoTresDos}>

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
                        name="three"
                        id="CB1"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CB2}>
                    <label>CB</label>
                    <input
                        type="text"
                        title="CB"
                        name="four"
                        id="CB2"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.RWB}>
                    <label> RWB</label>
                    <input
                        type="text"
                        title="RWB"
                        name="five"
                        id="RWB"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.LWB}>
                    <label>LWB</label>
                    <input
                        type="text"
                        title="LWB"
                        name="six"
                        id="LWB"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CM}>
                    <label>CM</label>
                    <input
                        type="text"
                        title="CM"
                        name="seven"
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
                        name="eight"
                        id="CM1"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CM2}>
                    <label>CM</label>
                    <input
                        type="text"
                        title="CM"
                        name="nine"
                        id="CM2"
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