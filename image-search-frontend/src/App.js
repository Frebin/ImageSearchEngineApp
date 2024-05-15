import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout.js";
import { theme } from "./configs/Theme.config";
import { ThemeProvider } from "@mui/material";
import styles from "./assets/css/app.module.css";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <div className={styles.App}>
          <Layout>
            <HomePage />
          </Layout>
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
