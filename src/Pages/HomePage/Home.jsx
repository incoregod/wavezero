import ContactSec from "./ContactSec";
import Header from "./Header";
import Main from "./Main";
import Partners from "./Partners";

const Home = () => {
  return (
    <div className="flex flex-col p-5 2xl:p-20">
      <header>
        <Header />
      </header>
      <main className="mt-10 md:mt-28 lg:mt-36 ">
        <Main />
      </main>
      <section className="mt-20 md:mt-28 lg:mt-36 ">
        <Partners />
      </section>
      <section className="mt-20 md:mt-28 lg:mt-36 ">
        <ContactSec />
      </section>
    </div>
  );
};

export default Home;
