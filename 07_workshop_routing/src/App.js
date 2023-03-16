import Catalogue from "./components/Catalogue";
import CreateItem from "./components/CreateItem";
import DetailsItem from "./components/DetailsItem";
import EditItem from "./components/EditItem";
import HomePage from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Register from "./components/Register";

function App() {
    return (
        <div id="box">

            <Navigation />

            <main id="main-content">
            </main>

            <HomePage />

            <Login />

            <Register />

            <CreateItem />

            <EditItem />

            <DetailsItem />

            <Catalogue />

        </div>
    );
};

export default App;
