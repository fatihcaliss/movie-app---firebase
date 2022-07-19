import Router from "./router/Router";
import AppContextProvider from "./context/AppContext";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <AppContextProvider>
      <Toaster   toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '1rem',
      color: '#713200',
      fontSize:"1rem",
    },
  }}
  containerStyle={{
    top: 50,
  }}/>
      <Router/>
    </AppContextProvider>
  );
}

export default App;
