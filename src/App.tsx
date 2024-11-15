import { Provider } from "react-redux";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout children={<HomePage />} />
      </PersistGate>
    </Provider>
  )
}

export default App
