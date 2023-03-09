import { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';

import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Todos from "./components/Todos";

function App() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:3030/jsonstore/todos')
    //         .then(response => response.json())
    //         .then(data => {
    //             const result = Object.keys(data).map(id => ({ id, ...data[id] }))
    //             setTodos(result);
    //             setIsLoading(false);
    //             // console.log(result);
    //         });
    // }, []);

    // async/await
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:3030/jsonstore/todos');
                const data = await response.json();
                const result = Object.keys(data).map(id => ({ id, ...data[id] }));
                setTodos(result);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const changeTodoStatus = (id) => {
        setTodos(old => old.map(t => t.id === id ? ({ ...t, isCompleted: !t.isCompleted }) : t))
    }

    return (
        <div>
            <Nav />
            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>
                    <AddTodo />
                    <div className="table-wrapper">
                        {isLoading
                            ? <Loading />
                            : <Todos todos={todos} changeTodoStatus={changeTodoStatus} />}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
