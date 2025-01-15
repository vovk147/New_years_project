
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../HomePage/HomePage";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';




const App = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;