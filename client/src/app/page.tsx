import Banner from "@/Components/Banner";
import ToastPopup from "@/Components/ConnectedToServer";
import Questioneries from "@/Components/Questioneries";
import Masthead from "@/Modules/Masthead";

export default function Home() {
  return (<>
  <Masthead />
  <main className="mt-8 ml-10 mr-10 lg:ml-20 lg:mr-20">
    <div className="h-[500px] flex-col flex lg:flex-row md:flex-col">
      <Banner />
      <Questioneries />
    </div>
  </main>
  <ToastPopup />
  </>
  );
}
