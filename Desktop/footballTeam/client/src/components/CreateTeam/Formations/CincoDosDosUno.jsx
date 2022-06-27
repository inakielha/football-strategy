

export default function CincoDosDosUno({setInput, input}) {
    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: {name:e.target.value, position: e.target.title}

        })
    }
    return (
        <div>
            <div>
                <label>GK</label>
                <input
                type="text"
                name="one"
                title="GK"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CB</label>
                <input
                type="text"
                name="two"
                title="CB"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CB</label>
                <input
                type="text"
                title="CB"
                name="three"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CB</label>
                <input
                type="text"
                title="CB"
                name="four"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label> RWB</label>
                <input
                type="text"
                name="five"
                title="RWB"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>LWB</label>
                <input
                type="text"
                title="LWB"
                name="six"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CM</label>
                <input
                type="text"
                name="seven"
                title="CM"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CM</label>
                <input
                type="text"
                title="CM"
                name="eight"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CAM</label>
                <input
                type="text"
                name="nine"
                title="CAM"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CAM</label>
                <input
                type="text"
                name="ten"
                title="CAM"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>ST</label>
                <input
                type="text"
                name="eleven"
                title="ST"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
        </div>
    )
}