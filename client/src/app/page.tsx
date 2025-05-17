import ToastPopup from "@/Components/ConnectedToServer";
import Masthead from "@/Modules/Masthead";

export default function Home() {
  return (<>
    <Masthead />
  <main className="mt-8 ml-20">
    Practice Platform
  </main>
  <ToastPopup />
  </>
  );
}
