import style from "../../Home/TeamCard/TeamCard.module.css"

export default function CincoDosDosUno({ setInput, input }) {
    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: { name: e.target.value, position: e.target.title, cssCode: e.target.id }

        })
    }
    return (
        <div className={style.infoContainer}>
            <div className={style.cincoDosDosUno}>
                <div className={style.GK}>
                    <label>GK</label>
                    <input
                        type="text"
                        name="one"
                        title="GK"
                        id="GK"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CB}>
                    <label>CB</label>
                    <input
                        type="text"
                        name="two"
                        id="CB"
                        title="CB"
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
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CB2}>
                    <label>CB</label>
                    <input
                        type="text"
                        title="CB"
                        id="CB2"
                        name="four"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.RWB}>
                    <label> RWB</label>
                    <input
                        type="text"
                        name="five"
                        title="RWB"
                        id="RWB"
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
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CM}>
                    <label>CM</label>
                    <input
                        type="text"
                        name="seven"
                        title="CM"
                        id="CM"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CM1}>
                    <label>CM</label>
                    <input
                        type="text"
                        title="CM"
                        id="CM1"
                        name="eight"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CAM}>
                    <label>CAM</label>
                    <input
                        type="text"
                        name="nine"
                        title="CAM"
                        id="CAM"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.CAM1}>
                    <label>CAM</label>
                    <input
                        type="text"
                        name="ten"
                        title="CAM"
                        id="CAM1"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.ST}>
                    <label>ST</label>
                    <input
                        type="text"
                        name="eleven"
                        title="ST"
                        id="ST"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
            </div>
        </div>
    )
}