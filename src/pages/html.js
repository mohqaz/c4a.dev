import Header from "../comp/header";
import Footer from "../comp/Footer";
import Maincontent from "../comp/Maincontent";
import { Helmet } from "react-helmet-async";

export default function Html() {
    return (
      <div>
        <>
        <Helmet>
          <title>html Page</title>
          <meta name="description" content="HTML" />
        </Helmet>
        <Header />
          <Maincontent pageName="HTML page" />
          <Footer />
        </>
      </div>
    );
  }
  