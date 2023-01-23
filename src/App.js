import "./style/App.css";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <main className="container">
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

export default App;
