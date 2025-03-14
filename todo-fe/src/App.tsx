import { SnackbarProvider } from "notistack";
import { MainRouter } from "./modules/core/components/MainRouter";
import { AuthProvider } from "./modules/auth/context/authContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <SnackbarProvider>
        <BrowserRouter>
          <AuthProvider>
            <MainRouter />
          </AuthProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
}

export default App;
