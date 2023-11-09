import { Suspense } from "react";
import Actividades from "./components/Actividades/Actividades";
import Contact from "./components/contact/Contact";
import Website from "./Pages/Website";
import Hospedajes from "./Pages/Hospedajes/Hospedajes";
import Hospedaje from "./Pages/Property/Hospedaje";
import Layout from "./Layout/Layout";
import './App.css'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import SlideProducts from "./components/SlideProducts/SlideProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Website />} />
              <Route path="/hospedajes">
                  <Route index element={<Hospedajes />} />
                  <Route path=":propertyId" element={<Hospedaje />} />
                </Route>
              <Route path="actividades" element={<Actividades />} />
              <Route path="contact" element={<Contact />} />
              <Route path="Slide" element={<SlideProducts />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
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