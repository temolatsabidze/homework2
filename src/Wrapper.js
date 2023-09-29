import Navbar from "./navbar";
import Footer from "./footer";

function Wrapper({ children }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      {children}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Wrapper;
