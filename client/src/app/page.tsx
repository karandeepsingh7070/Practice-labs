import Banner from "@/Components/Banner";
import ToastPopup from "@/Components/ConnectedToServer";
import Footer from "@/Components/Footer";
import Questioneries from "@/Components/Questioneries";
import Masthead from "@/Modules/Masthead";

export default function Home() {
  return (<>
  <Masthead />
  <main className="mt-8 ml-10 mr-10 lg:ml-20 lg:mr-20 overflow-x-hidden">
    <div className="lg:h-[550px] flex-col flex lg:flex-row md:flex-col">
      <Banner />
      <Questioneries />
    </div>
  </main>
  <ToastPopup />
  <Footer />
  </>
  );
}
