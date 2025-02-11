import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Profile from './profile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;