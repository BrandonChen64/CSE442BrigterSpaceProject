import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'

import GoodCounter from "./components/GoodCounter";
import BadCounter from "./components/BadCounter";
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
                    </Routes>
                </Router>
            </header>
        </div>
    )
}

export default App
