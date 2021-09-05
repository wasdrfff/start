import React, {FC} from 'react'
import './StyleSubheader.css'
const Subheader = () => {
    return (
        <div className='subheaderWrapper'>
            <input className='subheaderInput' placeholder='Поиск...' />
            <button className='subheaderButton'>Добавить</button>
        </div>
    )
}
export default Subheader