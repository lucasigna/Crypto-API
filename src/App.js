import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import './App.scss';
import { ChartsContainer } from './components/ChartsContainer/ChartsContainer';
import { InitialListContainer } from './components/InitialListContainer/InitialListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ChartProvider } from './context/ChartContext';

function App() {

    return (
        <BrowserRouter>

            <NavBar/>

            <Routes>
                <Route exact path="/" element={<Navigate to="/prices"/>}/>
                <Route exact path="/prices" element={<InitialListContainer/>}/>
                <Route exact path="/charts" element={<ChartProvider><ChartsContainer/></ChartProvider>}/>
                <Route exact path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
