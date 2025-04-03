import { Routes,Route } from 'react-router-dom';
import Lendpage from './Pages/Lendpage/Lendpage';

function MainRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Lendpage />} />
        </Routes>
    );
};

export default MainRoutes; 	