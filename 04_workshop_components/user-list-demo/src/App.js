import { useState, useEffect } from 'react';

import { getAllUsers } from './services/userService.js';

import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import Users from './components/Users';

function App() {
const[users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then((users) => {
                setUsers(users);
            }).catch((err) => {
                console.error(err);
            });
    }, [])

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <Users users={users}/>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
