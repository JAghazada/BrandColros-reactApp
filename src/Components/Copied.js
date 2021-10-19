import React from 'react'
import getContrastYIQ from './../helpers';

function Copied({color}) {
    return (
        <div className='copiedColor' style={{'--bgColor':`#${color}`,'--textColor':`${getContrastYIQ(color)}`}}>
            Copied #{color} to ClipBoard
        </div>
    )
}

export default Copied
