import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
