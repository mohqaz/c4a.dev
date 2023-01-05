import Header from "../comp/header";
import Footer from "../comp/Footer";
import Maincontent from "../comp/Maincontent";
import { Helmet } from "react-helmet-async";

export default function Javascript() {
    return (
      <div>
        <>
        <Helmet>
          <title>JavaScript Page</title>
          <meta name="description" content="JAVASCRIPT" />
        </Helmet>
          <Header />
          <Maincontent  pageName="JavaScript page" />
          <Footer />
        </>
      </div>
    );
  }
  