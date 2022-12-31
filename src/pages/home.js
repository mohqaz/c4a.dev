import Header from "../comp/header";
import Footer from "../comp/Footer";
import Maincontent from "../comp/Maincontent";

export default function Home() {
  return (
    <div>
      <>
        <Header />
        <Maincontent pageName="HOME Page" />
        <Footer />
      </>
    </div>
  );
}
