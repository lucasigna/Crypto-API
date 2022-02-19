import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import './App.scss';
import { InitialListContainer } from './components/InitialListContainer/InitialListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {

    return (
        <BrowserRouter>

            <NavBar/>

            <Routes>
                <Route exact path="/" element={<InitialListContainer/>}/>
                <Route exact path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
