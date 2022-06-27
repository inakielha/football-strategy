

export default function CuatroCuatroDos({setInput, input}){
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
                <label>RB</label>
                <input
                type="text"
                title="RB"
                name="four"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>LB</label>
                <input
                type="text"
                title="LB"
                name="five"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>CM</label>
                <input
                type="text"
                title="CM"
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
                <label>RM</label>
                <input
                type="text"
                title="RM"
                name="eight"
                // value="hola"
                onChange={(e)=>handleInput(e)}
                />
            </div>
            <div>
                <label>LM</label>
                <input
                type="text"
                title="LM"
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