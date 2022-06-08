import "./Time.css";

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/200"
const link1 = "https://www.timeanddate.com/worldclock/ "
function Time() {
    return (
        <>
            <h2 className="time">
                <img src={img1} />
                <a href={link1} target="_blank">
                    <button className="clock">World Clock</button>
                </a>
                <p> Date : {date}</p>
                <p> Time : {time}</p>
            </h2>
        </>
    );
}
export default Time;