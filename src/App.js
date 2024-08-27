import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Style.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    }
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
