import { useState, useEffect } from 'react';

import { getAllUsers, createUser, editUser, deleteUser } from './services/userService.js';

import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import Users from './components/Users';
import Pagination from './components/Pagination.js';

function App() {
    const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        imageUrl: '',
        country: '',
        city: '',
        street: '',
        streetNumber: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const formChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

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

        const { country, city, street, streetNumber, ...userData } = formValues;
        userData.address = { country, city, street, streetNumber };

        const result = await createUser(userData);
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

    const formValidation = (e) => {

        if (e.target.name === 'firstName' && e.target.value.length < 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: 'First name should be at least 3 characters long!' }));
        }
        else if (e.target.name === 'lastName' && e.target.value.length < 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: 'Last name should be at least 3 characters long!' }));
        } 
        else if (e.target.name === 'email' && (!/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/i.test(e.target.value))) {
            setFormErrors(state => ({ ...state, [e.target.name]: 'Email is not valid!' }));
        } 
        else if (e.target.name === 'imageUrl' && (!/^https?:\/\/.+/i.test(e.target.value))) {
            setFormErrors(state => ({ ...state, [e.target.name]: 'ImageUrl is not valid!' }));
        } 
        else if (e.target.name === 'phoneNumber' && (!/^0[1-9]{1}[0-9]{8}$/i.test(e.target.value))) {
            setFormErrors(state => ({ ...state, [e.target.name]: 'Phone number is not valid!' }));
        } 
        else if (e.target.name === 'country' && e.target.value.length < 2) {
            setFormErrors(state => ({ ...state, [e.target.name]: 'Country should be at least 2 characters long!' }));
        } 
        else if (e.target.name === 'city' && e.target.value.length < 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: 'City should be at least 3 characters long!' }));
        } 
        else if (e.target.name === 'street' && e.target.value.length < 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: 'Street should be at least 3 characters long!' }));
        }
        else if (e.target.name === 'streetNumber' && isNaN(Number(e.target.value))) {
            console.log(isNaN(+e.target.value))
            setFormErrors(state => ({ ...state, [e.target.name]: 'Street number should be a positive number!' }));
        } else {
            setFormErrors(state => ({...state, [e.target.name]: ''}))
        };
    }

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
                        onDeleteUser={onDeleteUser}
                        formChangeHandler={formChangeHandler}
                        formValues={formValues}
                        formErrors={formErrors}
                        formValidation={formValidation} />
                    {/* <Pagination /> */}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
