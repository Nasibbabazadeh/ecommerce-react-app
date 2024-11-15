import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <MainLayout children={<HomePage />} />
    </>
  )
}

export default App
