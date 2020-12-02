import React, {useEffect, useState} from 'react'

function LogField(
    {
        start,
        coordinates,
        setStart
    }
) {

    const directions = ["N", "E", "S", "W"]
    const [finalPosition, setFinalPosition] = useState({x: 0, y: 0})

    useEffect(()=>{
        if(start){
            startMoving()
        }
    }, [start])

    const startMoving = () => {
        let currentPosition = {x: 0, y: 0};
        let movingHistory = []
        let directionIndex = 0;
            coordinates.some(coordinate => {
                let numberOfSteps = 0;
                console.log(coordinate)
                while(numberOfSteps<Number(coordinate)){
                        const newPosition = directions[directionIndex]==="N"? {x: currentPosition.x, y:currentPosition.y+1} : 
                                            directions[directionIndex]==="E"? {x: currentPosition.x+1, y:currentPosition.y} :
                                            directions[directionIndex]==="S"? {x: currentPosition.x, y:currentPosition.y-1} : {x: currentPosition.x-1, y:currentPosition.y} 
                        const checkIfWasHere = movingHistory.find(item => item.x===newPosition.x && item.y===newPosition.y)!==undefined
                        console.log(checkIfWasHere, newPosition, movingHistory, currentPosition)
                        currentPosition=newPosition
                        if(checkIfWasHere) {
                            return true
                        } else {
                            movingHistory=movingHistory.concat(newPosition)
                            numberOfSteps=numberOfSteps+1
                        }
                }
                directionIndex= directionIndex!==3? directionIndex+1: 0
            })
        setStart(false)
        setFinalPosition(currentPosition)
    }

    return (
        <div>
            <h3>Robot stopped at: [{finalPosition.x}, {finalPosition.y}]</h3>
        </div>
    )
}

export default LogField
