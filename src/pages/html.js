import Header from "../comp/header";
import Footer from "../comp/Footer";
import Maincontent from "../comp/Maincontent";

export default function Html() {
    return (
      <div>
        <>
        <Header />
          <Maincontent pageName="HTML page" />
          <Footer />
        </>
      </div>
    );
  }
  