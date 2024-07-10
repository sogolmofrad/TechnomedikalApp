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
            Technomed, established in 2020, is a key investor in Hospitals and
            Radiation Oncology clinics. Specializing in coordinating and
            managing these facilities, we prioritize high-tech radiotherapy
            systems. As pioneers in Turkey, we have made substantial investments
            in state-of-the-art MR-linac technology, marking the 42nd globally
            and 3rd in Turkey, at Medicana Ataşehir Hospital, underscoring our
            commitment to cutting-edge technologies. Our dedication extends to
            delivering exceptional patient care, not only at Medicana but also
            within public hospitals. Our mission at Technomed is to
            revolutionize cancer care in the MENA region.
          </p>
          <h3>-Solutions:</h3>
          <ul>
            <li>
              Technomed, established in 2020, is a key investor in Hospitals and
              Radiation Oncology clinics. Specializing in coordinating and
              managing these facilities, we prioritize high-tech radiotherapy
              systems. As pioneers in Turkey, we have made substantial
              investments in state-of-the-art MR-linac technology, marking the
              42nd globally and 3rd in Turkey, at Medicana Ataşehir Hospital,
              underscoring our commitment to cutting-edge technologies. Our
              dedication extends to delivering exceptional patient care, not
              only at Medicana but also within public hospitals. Our mission at
              Technomed is to revolutionize cancer care in the MENA region.
            </li>
            <li>
              <b>Technomed Academy</b> offers medical training programs to
              enhance knowledge of high-tech treatment methods.
            </li>
            <li>
              Our upcoming initiative, <b>Technogene</b>, aims to transform
              cancer care in the <b>MENA </b>region, envisioning a future of
              limitless healthcare driven by innovation and compassion.
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
