import React from 'react'

function DigitalClock() {
    const time= new Date()
    const day=time.toDateString()
    const day1=time.toLocaleTimeString()
    return (
        <div>
            {day}
            <br></br>
            {day1}
        </div>
    )
}

export default DigitalClock


