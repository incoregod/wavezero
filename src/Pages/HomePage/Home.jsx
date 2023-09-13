import ContactSec from "./ContactSec";
import Header from "./Header";
import Main from "./Main";
import Partners from "./Partners";

const Home = () => {
  return (
    <div className="flex flex-col p-10">
      <header>
        <Header />
      </header>
      <main className="mt-10">
        <Main />
      </main>
      <section className="mt-20">
        <Partners />
      </section>
      <section className="mt-10">
        <ContactSec />
      </section>
    </div>
  );
};

export default Home;
