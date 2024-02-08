
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';


function App() {

   return (
   <div style={{
    margin: "50px auto",
    width: "390px",
   }}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
            </Routes>
        </BrowserRouter>
     </div>
    )
}

export default App;