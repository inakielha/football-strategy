

export const CincoTresDos = ({setInput, input})=>{
    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: {name:e.target.value, position: e.target.title}
        })
    }
    return(
        <div>
            <div>
                <label>GK</label>
                <input
                type="text"
                title="GK"
                name="one"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CB</label>
                <input
                type="text"
                title="CB"
                name="two"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CB</label>
                <input
                type="text"
                title="CB"
                name="three"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CB</label>
                <input
                type="text"
                title="CB"
                name="four"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label> RWB</label>
                <input
                type="text"
                title="RWB"
                name="five"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>LWB</label>
                <input
                type="text"
                title="LWB"
                name="six"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CM</label>
                <input
                type="text"
                title="CM"
                name="seven"
                // value="hola"
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
                <label>CM</label>
                <input
                type="text"
                title="CM"
                name="nine"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>ST</label>
                <input
                type="text"
                title="ST"
                name="ten"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>ST</label>
                <input
                type="text"
                title="ST"
                name="eleven"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
        </div>
    )
}