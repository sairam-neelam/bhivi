import Amenities from "../../components/Amenities/Amenities";
import Footer from "../../components/Footer/Footer";
import FooterBanner from "../../components/FooterBanner/FooterBanner";
import Header from "../../components/Header/Header";
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import SpaceListing from "../../components/SpaceListing/SpaceListing";

function Home() {
  return (
    <>
      <Header />
      <LandingHeader />
      <Amenities />
      <SpaceListing />
      <FooterBanner />
      <Footer />
    </>
  );
}

export default Home;
