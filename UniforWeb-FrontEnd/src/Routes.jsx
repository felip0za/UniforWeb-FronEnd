import { Routes,Route } from 'react-router-dom';

function MainRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Lendpage />} />
        </Routes>
    );
};

export default MainRoutes;