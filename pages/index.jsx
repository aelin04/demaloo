// Components
import { Header } from "../Layout/Header/Header";
import { First } from "../Layout/First/First";
import { Activity } from "../Layout/Activity/Activity";
import { Activity2 } from "../Layout/Activity2/Activity2";
import { Activity3 } from "../Layout/Activity3/Activity3"

// Styles
import styles from "../styles/Home.module.css"
import { Partners } from "../Layout/Partners/Partners";
import { Projects } from "../Layout/Projects/Projects";
import { Footer } from "../Layout/Footer/Footer";
import { News } from "../Layout/News/News";
import { Submit } from "../Layout/Submit/Submit";

function Home({ news }) {
  return (
    <>
      <Header />

      <First />
      <div className={styles.main}>
        <Activity />

      </div>
      <Projects />
      <Partners />
      <div className={styles.background}>
        <div className={styles.blur}>
         
          <News news={news} />
          <Submit />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home;
