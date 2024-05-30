import Amenities from "../../components/Amenities/Amenities";
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
    </>
  );
}

export default Home;
