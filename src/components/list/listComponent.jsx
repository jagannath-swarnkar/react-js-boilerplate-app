import React from 'react'

const ListComponent = (props) => {
    const {listItems, ulClass, liClass, ...others} = props;

    return (
        <>
            <ul className={`${ulClass}`}>
                {listItems.map((item,index)=>{
                    return (
                        <li 
                            key={index} 
                            className={`${liClass}`} 
                            href={item.href}>
                                {item.label}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ListComponent

// const listItems = [
//     {href: "/about", label: "about"},
//     {href: "/about", label: "about"},
//     {href: "/about", label: "about"},
//     {href: "/about", label: "about"},
// ]

// <ListComponent listItems={listItems} />