import { useState, useEffect } from 'react';

import { getAllUsers, createUser, editUser, deleteUser } from './services/userService.js';

import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import Users from './components/Users';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then((users) => {
                setUsers(users);
            }).catch((err) => {
                console.error(err);
            });
    }, []);

    const onUserCreate = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const result = await createUser(data);

        setUsers(state => [...state, result.user]);
    };

    const onSuccessfulUpdate = async (e, userId) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const updatedUser = await editUser(userId, data);

        setUsers(state => state.map(u => u._id === userId ? updatedUser : u));
    };


    const onDeleteUser = async (id) => {
        await deleteUser(id);
        setUsers(state => state.filter(u => u._id !== id));
    };

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <Users
                        users={users}
                        onUserCreate={onUserCreate}
                        onSuccessfulUpdate={onSuccessfulUpdate}
                        onDeleteUser={onDeleteUser} />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
