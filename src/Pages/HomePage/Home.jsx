import ContactSec from "./ContactSec";
import Header from "./Header";
import Main from "./Main";
import Partners from "./Partners";

import { Parallax } from "react-scroll-parallax";

//<Parallax translateY={[-20, 20]}>
const Home = () => {
  return (
    <div className="flex flex-col p-5 md:p-10 2xl:p-20">
      <header>
        <Header />
      </header>

      <main className="mt-10 md:mt-28 lg:mt-36 ">
        <Parallax translateY={[-50, 50]}>
          <Main />
        </Parallax>
      </main>
      <section className="mt-20 md:mt-28 lg:mt-36 ">
        <Parallax translateY={[30, -5]}>
          <Partners />
        </Parallax>
      </section>
      <section className="mt-20 md:mt-28 lg:mt-36 ">
        <Parallax translateY={[30, -50]}>
          <ContactSec />
        </Parallax>
      </section>
    </div>
  );
};

export default Home;
