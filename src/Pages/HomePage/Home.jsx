import ContactSec from "./ContactSec";
import Header from "./Header";
import Main from "./Main";
import Partners from "./Partners";

const Home = () => {
  return (
    <div className="flex flex-col py-10">
      <header className="px-10">
        <Header />
      </header>
      <main className="mt-10 px-10">
        <Main />
      </main>
      <section className="mt-20">
        <Partners />
      </section>
      <section className="mt-20 px-10">
        <ContactSec />
      </section>
    </div>
  );
};

export default Home;
