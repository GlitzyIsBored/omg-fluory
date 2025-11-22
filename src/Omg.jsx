import { SassColor } from "sass";
import Desc from "./components/Desc";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import "./Omg.scss";

const Omg = () => {
  const styles = {
    backgroundColor: "white",
    padding: "1rem",
    textAlign: "center",
    display: "grid",
  };

  return (
    <section id="main">
      <p style={styles}>yeah</p>
      <section id="desc">
        <Desc />
        <img src="src\assets\Main\Icon_V3.png" width={200} />
      </section>
      <Grid />
      <Footer />
    </section>
  );
};

export default Omg;
