import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import MainContainer from "./components/ui/MainContainer"
function App() {


  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  )
}

export default App
