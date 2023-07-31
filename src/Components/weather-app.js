import React, { useState } from 'react'
import { tsagAgaarData } from './Tsag-Agaar-Hotuud';
import { tsagAgaarDatabase } from './Tsag-Agaar-Busad';
const Weather = () => {
    const [App, setApp] = useState();
    const onUlaanbaatar = () => {
     
     setApp(tsagAgaarData)
    }
    const onDarkhan = () => {
    
     setApp(tsagAgaarData)
    }
     const onGom = () => {
    
       setApp(tsagAgaarDatabase)
     }
    return ( 
        <div>
            <button onClick={onUlaanbaatar}>Ulaanbaatar</button>
            <button onClick={onDarkhan}>Darkhan</button>
            <button onClick={onGom}>Ulaan-Gom</button>
            <div className='ulaanbaatar'>
              {onUlaanbaatar}
            </div>
            <div className='Darkhan'>
            {onDarkhan}
            </div>
            <div className='UlaanGom'>
            {onGom}
            </div>
        </div>
     );
}
export default Weather;