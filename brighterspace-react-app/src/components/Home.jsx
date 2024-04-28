import {  Link  } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <Link to="/bad">Go to Bad Page</Link>
            <br></br>
            <Link to="/good">Go to Good Page</Link>
            <br></br>
            <Link to="/meh">Go to Meh Page</Link>
            <br></br>
            <Link to="/weird">Go to Weird Page</Link>
            <br></br>
            <Link to="/board">Go to Messages Page</Link>
        </div>
    );
}