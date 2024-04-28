import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'

import GoodCounter from "./components/GoodCounter";
import BadCounter from "./components/BadCounter";
import MehCounter from "./components/MehCounter";
import WeirdCounter from "./components/WeirdCounter";
import MessageBoard from "./components/MessageBoard";

import Home from './components/Home';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/good" element={<GoodCounter />} />
                        <Route path="/bad" element={<BadCounter />} />
                        <Route path="/meh" element={<MehCounter />} />
                        <Route path="/weird" element={<WeirdCounter />} />
                        <Route path="/board" element={<MessageBoard />} />
                    </Routes>
                </Router>
            </header>
        </div>
    )
}

export default App
