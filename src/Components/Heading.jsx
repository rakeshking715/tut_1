import "./Heading.css";

function Heading(props) {

    return (
        <>
            <div className="container">
            <div className="image"  >
            <img src={props?.obj?.imgsrc? props.obj.imgsrc:'https://www.bing.com/th?id=OIP.xeMRSwlDQBg55vXHYa_HpQHaHZ&w=204&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'} alt={props.obj.title }className="image"/>
            </div>
                    <div className="see">
                        <span>{props.obj.title}</span>
                        <h3> {props.obj.sname}</h3>
                        <a href={props.obj.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                   
                </div>
            </div>
        </>
    )
}

export default Heading;