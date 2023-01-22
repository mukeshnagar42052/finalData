import './App.css';
import ResponsiveDrawer from './pages/index';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <ResponsiveDrawer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
