import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/home-page/HomePage';
import Header from './components/header/Header';
import GamePage from './pages/game-page/GamePage';
import OrderPage from './pages/order-page/OrderPage'

function App() {
  return (<>
    <Router>
    <div className="container">
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:title" element={<GamePage />}/>
        <Route path="/place" element={<OrderPage/>}/>
      </Routes>
    </div>
    </Router>
  </>);
}
export default App;
