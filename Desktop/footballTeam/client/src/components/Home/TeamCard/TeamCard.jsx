

export default function TeamCard({ players, teamName, cantidadPlayers, formation }) {
    return (
        <div>
            <h3>{teamName}</h3>
            <h4>{formation}</h4>
            <div>
                {players?.map((element,index) => {
                    return (
                        <div key={index}>
                            <p>{element.name}</p>
                            <p>{element.position} </p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}