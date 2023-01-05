import Header from "../comp/header";
import Footer from "../comp/Footer";
import Maincontent from "../comp/Maincontent";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <>
        <Helmet>
          <title>home Page</title>
          <meta name="description" content="HOME" />
        </Helmet>
        <Header />
        <Maincontent pageName="HOME Page" />
        <Footer />
      </>
    </div>
  );
}
