import style from "../../Home/TeamCard/TeamCard.module.css"

export default function CuatroTresTres({ setInput, input }) {
    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: { name: e.target.value, position: e.target.title, cssCode: e.target.id }


        })
    }
    return (
        <div className={style.infoContainer}>
            <div className={style.cuatroTresTres}>
                <div className={style.GK}>
                    <label>GK</label>
                    <input
                        type="text"
                        title="GK"
                        id="GK"
                        name="one"
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
                        id="LB"
                        name="five"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CM}>
                    <label>CM</label>
                    <input
                        type="text"
                        title="CM"
                        id="CM"
                        name="six"
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
                <div className={style.RW}>
                    <label>RW</label>
                    <input
                        type="text"
                        title="RW"
                        id="RW"
                        name="nine"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.LW}>
                    <label>LW</label>
                    <input
                        type="text"
                        title="LW"
                        id="LW"
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