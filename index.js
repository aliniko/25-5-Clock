function App() {

    const [displayTime, setDisplayTime] = React.useState(25 * 60);

    const formatTime = (time) => {
        let minutes = Math.floor(time/60);
        let seconds = time % 60;
        return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)
    }
    return <h1> {formatTime(displayTime)} </h1>
}

ReactDOM.render(<App/>, document.getElementById("root"))