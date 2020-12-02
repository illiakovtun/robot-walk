import React, {useState} from 'react'
import LogField from './LogField'

function RobotWalk() {

    const [coordinates, setCoordinates] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [start, setStart] = useState(false)

    const onChange = (input) => {
        setInputValue(input)
        const arrayOfCoordinates = input.split(" ")
        if(arrayOfCoordinates[arrayOfCoordinates.length-1] === ""){
            arrayOfCoordinates.pop()
        }
        console.log(arrayOfCoordinates)
        setCoordinates(arrayOfCoordinates)
    }

    const startWalk = () => {
        setStart(true)
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={e => onChange(e.target.value)}/>
            <button onClick={startWalk} type="button">Start</button>
            <LogField 
                start={start}
                coordinates={coordinates}
                setStart={setStart}
            />
        </div>
    )
}

export default RobotWalk
