import Layout from "@/components/Layout/Layout";
import MainSliderOne from "@/components/MainSliderOne/MainSliderOne";
import FeatureOne from "@/components/FeatureOne/FeatureOne";
import CtaOne from "@/components/CtaOne/CtaOne";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import AboutOne from "@/components/AboutOne/AboutOne";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import CtaTwo from "@/components/CtaTwo/CtaTwo";
import TeamOne from "@/components/TeamOne/TeamOne";
import OurSolution from "@/components/OurSolution/OurSolution";
import FeatureTwo from "@/components/FeatureTwo/FeatureTwo";
import PojectOne from "@/components/ProjectOne/ProjectOne";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import SlideText from "@/components/SlideText/SlideText";
import ContactOne from "@/components/ContactOne/ContactOne";
import BlogOne from "@/components/BlogOne/BlogOne";
import Mail from "@/components/Mail/Mail";
import TopBar from "@/components/TopBar/TopBar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeaderCloned from "@/components/Header/HeaderCloned";


export const metadata = {
  title: "Reddot Technologies",
  description:
    "Reddot is a one-stop solution offering a wide range of services, including Software Development, Digital Marketing, Branding, and Resource Outsourcing.",
};


const page = () => {

  return (
    <Layout pageTitle='home'>
      <TopBar />
      <Header />
      <HeaderCloned />
      <MainSliderOne />
      <FeatureOne />
      <CtaOne />
      <ServiceOne />
      <AboutOne />
      <FunFactOne />
      <CtaTwo />
      <TeamOne />
      <OurSolution />
      <FeatureTwo />
      <PojectOne />
      <ClientCarousel />
      <SlideText />
      <ContactOne />
      <BlogOne />
      <Mail />
      <Footer />
    </Layout>
  );
}
export default page;
