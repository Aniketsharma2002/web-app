import React from 'react'
import "./Cards.css"

const Cards = (props) => {
    return (
        <div className='cards' style={{overflow:"hidden"}}>
            <img src="https://www.codingdojo.com/blog/wp-content/uploads/begincoding.jpg.webp" alt="coding image" width={333} style={{border:"2px solid black"}} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>

        </div>
    )
}

export default Cards
