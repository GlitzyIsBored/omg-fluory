import Desc from "./components/Desc";
import Footer from "./components/Footer";
import Grid from "./components/Grid";

import icon from "./assets/Main/Icon_V3.png";

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
        <img src={icon} width={200} height={200} />
      </section>
      <Grid />
      <Footer />
    </section>
  );
};

export default Omg;
