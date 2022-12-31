import Header from "../comp/header";
import Footer from "../comp/Footer";
import Maincontent from "../comp/Maincontent";

export default function Javascript() {
    return (
      <div>
        <>
          <Header />
          <Maincontent  pageName="JavaScript page" />
          <Footer />
        </>
      </div>
    );
  }
  