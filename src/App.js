import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Style.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
