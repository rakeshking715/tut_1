import Heading from "./Heading";
import Card from "./Card";
import "./Netflix.css";

const Netflix = () => {
    return (
<>
<div className="Netflix">
<h1 className='head'>List of top Netflix and Amazon-prime, Movies and Series </h1>
        {
            Card.map(function (object, i) {
                return <Heading
                    obj={object} key={i}
                />
            })
        }
        </div>
        </>
    );
}
export default Netflix;