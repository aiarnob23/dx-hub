import Banner from "./components/banner/banner";
import Services from "./components/services/services";
import AboutUs from "./components/about-us/about-us";


export default function Home() {
  return (
      <div className="container mx-auto mt-14">
      <Banner />
      <Services />
      <AboutUs/>
    </div>
  );
}
