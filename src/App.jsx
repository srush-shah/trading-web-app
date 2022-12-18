import Navbar from "./components/Navbar.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CoinCard from "./components/CoinCard.component";
import Chart from "./components/Chart.component";

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
        <Chart />
      </ThemeProvider>
    </>
  );
}

export default App;
