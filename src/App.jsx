import NavbarComponent from "./components/ui/Navbar.component";
import FooterComponent from "./components/ui/Footer.component";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import ProductsPage from "./pages/Products.page";
import GalleryPage from "./pages/Gallery.page";
import NewsPage from "./pages/News.page";
import AboutUsPage from "./pages/AboutUs.page";
import ContactUsPage from "./pages/ContactUs.page";


function App() {
  return (
    <div className="App">

        {/* Navbar */}
      <NavbarComponent />

        {/* Navbar */}
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/contactus" element={<ContactUsPage />} />
            </Routes>
        </div>

      {/* Footer */}
      <FooterComponent />

    </div>
  );
}

export default App;
