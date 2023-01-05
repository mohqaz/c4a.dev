import Header from "../comp/header";
import Footer from "../comp/Footer";
import Maincontent from "../comp/Maincontent";
import { Helmet } from "react-helmet-async";

export default function Css() {
    return (
      <div>
        <>
        <Helmet>
          <title>CSS Page</title>
          <meta name="description" content="CSS" />
        </Helmet>
          <Header />
          <Maincontent pageName="CSS page" />
          <Footer />
        </>
      </div>
    );
  }
  