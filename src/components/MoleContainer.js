import { useState } from 'react'
import Mole from "./Mole"
import Empty from "./Empty"

function MoleContainer (props) {
    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    let showMole = displayMole ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleClick={handleClick} /> : <Empty toggle={setDisplayMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {showMole}
        </div>
    )
}

export default MoleContainer