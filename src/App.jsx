import Navbar from "./components/Navbar.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CoinCard from "./components/CoinCard.component";

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
        <CoinCard />
      </ThemeProvider>
    </>
  );
}

export default App;
