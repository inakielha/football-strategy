import style from "../../Home/TeamCard/TeamCard.module.css"


export const TresCuatroUnoDos = ({ setInput, input }) => {
    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: { name: e.target.value, position: e.target.title, cssCode: e.target.id }

        })
    }
    return (
        <div className={style.infoContainer}>
            <div className={style.tresCuatroUnoDos}>
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
                <div className={style.CB2}>
                    <label>CB</label>
                    <input
                        type="text"
                        title="CB"
                        id="CB2"
                        name="four"
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
                        name="five"
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
                        name="six"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.RM}>
                    <label>RM</label>
                    <input
                        type="text"
                        title="RM"
                        id="RM"
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
                <div className={style.LM}>
                    <label>LM</label>
                    <input
                        type="text"
                        title="LM"
                        id="LM"
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
                        id="ST"
                        name="ten"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
                <div className={style.ST1}>
                    <label>ST</label>
                    <input
                        type="text"
                        title="ST"
                        id="ST1"
                        name="eleven"
                        // value="hola"
                        onChange={(e) => handleInput(e)}
                    />
                </div>
            </div>
        </div>
    )
}