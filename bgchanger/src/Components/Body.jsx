import React, { useState } from 'react'
import './Body.css'

function Body() {
    const [color, setColor] = useState('olive')
    return (
        <div className='body' style={{background: color}}>
            <h1>You can change background Color of the body by selecting particular button</h1>
            <div className="button">

                <button className='red' onClick={() => setColor('red')}>Red</button>
                <button className='blue' onClick={() => setColor('blue')}>Blue</button>
                <button className='green'onClick={() => setColor('green')}>Green</button>
            </div>

        </div>
    )
}

export default Body
