import styles from './App.module.css';
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Header/>
            <div className>
                <div className={styles.bodyWrapper}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                </Routes>
            </div>
            <Footer/>
            </div>
        </Router>
    );
}

export default App;
