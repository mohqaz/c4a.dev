import Header from "../comp/header";
import Footer from "../comp/Footer";
import Maincontent from "../comp/Maincontent";

export default function Css() {
    return (
      <div>
        <>
          <Header />
          <Maincontent pageName="CSS page" />
          <Footer />
        </>
      </div>
    );
  }
  