import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import SecondBar from "../components/SecondBar";
import Body from "../components/Body";

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <SecondBar />
            <Routes>
                <Route path='/' element={<Body />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Home;