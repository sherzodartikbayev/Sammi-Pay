import { Billing, Contract, Home, Navbar, Statistics, Business, CTA, Testimonials, Clients, Footer } from "./components/index";
import { styles } from "./util/style";

const App = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      {/* Navbar  */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
      
      {/* home  */}
      <div className={`bg-primary ${styles.flexBetween} `}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />  
          <Billing />
          <Business />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
