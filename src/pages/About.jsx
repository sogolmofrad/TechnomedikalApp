import styles from "./About.module.css";
import Navigation from "../assets/components/Navigation";

function About() {
  return (
    <div>
      <Navigation />
      <section className={styles.about}>
        <div className={styles.aboutTextBox}>
          <h1>About us</h1>
          <p>
            Founded in 2020, Technomed is a leading investor in hospitals and
            radiation oncology clinics, specializing in the coordination and
            management of high-tech radiotherapy facilities. As pioneers in
            Turkey, we have made significant investments in advanced medical
            technologies across both public and private hospitals. Notably, we
            introduced state-of-the-art MR-Linac technology at Medicana Ataşehir
            Hospital—the 42nd globally and the 3rd in Turkey—demonstrating our
            unwavering commitment to innovation in cancer treatment.
            <br />
            At Technomed, our mission is to revolutionize cancer care on a
            global scale, with a particular focus on the MENA region. We aim to
            drive progress through cutting-edge solutions that prioritize
            patient outcomes and redefine the future of healthcare.
          </p>

          <h3>-Our Solutions:</h3>
          <ul>
            <li>
              <b>Technomed Academy:</b> Offering international medical training
              programs to enhance the knowledge and expertise of physicians in
              advanced cancer treatment techniques, with a focus on the MENA
              region.
            </li>
            <li>
              <b>Technogene: </b> Our upcoming initiative designed to transform
              cancer care in the MENA region, envisioning a future powered by
              innovation, compassion, and limitless possibilities in healthcare
            </li>
          </ul>
        </div>
        <div className={styles.aboutImageBox}>
          <img src="images/about-2.gif" alt="about" />
        </div>
      </section>
    </div>
  );
}

export default About;
