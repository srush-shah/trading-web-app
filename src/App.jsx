import Navbar from "./components/Navbar.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "./components/Card.component";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
