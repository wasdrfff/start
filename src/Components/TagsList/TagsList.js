import React from 'react'
import Tag from '../Tag/Tag'
const TagsList = () =>{
    const tags = [
        {
            title:'Дональд Трамп',
            description:'Американский государтсвенный деятель'
        },
        {
            title:'Путин Владимир Владимирович',
            description:'Российский государтсвенный деятель'
        },
        {
            title:'Стивен Сигал',
            description:'Американский государтсвенный политик'
        }
    ]
    return (
        <div className='tagsListWrapper'>
            {tags.map(tag=>(
                <Tag tag={tag}/>
            ))}
        
        </div>
    )
}
export default TagsList