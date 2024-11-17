import React from 'react'
import './RandomQoute.css'
const RandomQoute = () => {
  return (

    const [qoute,setQoute] = useState({
        text: "difficulties increase nearer we get to the goal",
        author: "johan wolfgang"
    });
    <div className='container'>
        <div classname = 'qoute'>{qoute.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom"></div>
            <div className="author">{qoute.author}</div>
            <div className="icons"></div>
        </div>
    </div>
  )
}

export default RandomQoute
