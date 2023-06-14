
import './assets/reset.css'
import { Header } from "./components/header/Header"
import './App.css'
import { Banner } from "./components/banner/banner"
import { Footer } from "./components/footer/Footer"
function App() {


  return (
    <>
      <Header />
      <main>
       <Banner />
        <section className="section1">
          <p>POR QUE NÓS ?</p>
        </section>
        <section className="section2">
          <p>quartos</p>
        </section>
        <section className="section3">
        <p>Avaliacão</p>
        </section>
        <section className="section4">
          <p>COMO NOS ENCONTRAR </p>
        </section>
        
        <Footer/>
        
      </main>
    </>
  )
}

export default App
