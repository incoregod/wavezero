import CenterText from "./CenterText";
import ContactSec from "./ContactSec";
import Header from "./Header";
import Main from "./Main";
import Partners from "./Partners";

import { Parallax } from "react-scroll-parallax";

//<Parallax translateY={[-20, 20]}>
const Home = () => {
  return (
    <div className="flex flex-col ">
      <header>
        <Header />
      </header>

      <main className="mt-10 md:mt-0">
        <Parallax translateY={[20, -20]}>
          <Main />
        </Parallax>
      </main>
      <section>
        <Parallax translateY={[50, -30]}>
          <CenterText />
        </Parallax>
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <Parallax translateY={[30, -20]}>
          <ContactSec />
        </Parallax>
      </section>
    </div>
  );
};

export default Home;
