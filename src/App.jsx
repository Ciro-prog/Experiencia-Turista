import Actividades from "./components/Actividades/Actividades";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Companies from "./components/companies/companies";
import Contact from "./components/contact/Contact";
import Hospedaje from "./components/Hospedajes/Hospedaje"
import Hero from "./components/hero/Hero";
import './App.css'
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Actividades/>
      <Hospedaje/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
 {/* <BrowserRouter>
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Website />} />
      <Route path="/properties">
        <Route index element={<Properties />} />
        <Route path=":proper  tyId" element={<Property />} />
      </Route>
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/favourites" element={<Favourites />} />
    </Route>
  </Routes>
</Suspense>
</BrowserRouter> */} 