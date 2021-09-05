import React from 'react'
import './StyleTag.css'
const Tag = ({tag}) =>{
    return(
        <div className='tagWrapper'>
            <div className='tagInformation'>
                <h1>{tag.title}</h1>
                <p>{tag.description}</p>

            </div>
            <div className='tagActions'>
                <p>Корзина</p>
            </div>

        </div>
    )
}
export default Tag