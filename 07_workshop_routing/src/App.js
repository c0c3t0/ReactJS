import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { getNewest } from './services/data.js';

import Catalogue from "./components/Catalogue";
import CreateItem from "./components/CreateItem";
import DetailsItem from "./components/DetailsItem";
import EditItem from "./components/EditItem";
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Register from "./components/Register";

function App() {
    const [newestGames, setNewestGames] = useState([]);

    useEffect(() => {
        getNewest().then(result => {
            setNewestGames(result);
            console.log(result);
        });
    }, []);

    return (
        <div id="box">

            <Navigation />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home newestGames={newestGames} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<CreateItem />} />
                    <Route path='/edit/:id' element={<EditItem />} />
                    <Route path='/details/:id' element={<DetailsItem />} />
                    <Route path='/catalogue' element={<Catalogue />} />
                </Routes>
            </main>

        </div>
    );
};

export default App;
