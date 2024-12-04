import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/catalog" element={<Catalog />}/>
            </Routes>
        </Router>
    );
}

export default App;
