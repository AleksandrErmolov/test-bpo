
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import { Routes, Route } from "react-router-dom";
import Findbilet from './component/Findbilet/Findbilet';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main  />} />
        <Route path="/find" element={<Findbilet />} />
</Routes>

      <Footer />
    </div>
  );
}

export default App;
