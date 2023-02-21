// src/POPOSSpace.js
import "./POPOSSpace.css"

function POPOSSpace(props) {
    const { name, image, address, hours } = props

    return (
    <div>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt="50 Califonia St."
        />
        <h1>{name}</h1>
        <div>{address}</div>
        <div className="hours">{hours}</div>
    </div>
    )
}

export default POPOSSpace