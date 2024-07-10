import AcademyForm from "./AcademyForm";
import styles from "./AcademyInfo.module.css";
function AcademyInfo() {
  return (
    <section className={styles.academyInfo}>
      <div className={styles.aboutTextBox}>
        <h1>Technomed Academy</h1>
        <p>
          Technomed Academy stands at the forefront of transformative education,
          dedicated to elevating the level of treatment knowledge for the entire
          medical healthcare group. Our mission goes beyond conventional
          boundaries, aiming to shape the future of healthcare on a global
          scale.
          <br />
          We are dedicated to equipping healthcare professionals with the
          necessary tools for success, emphasizing continuous learning and
          innovation.
          <br />
          Our vision is to promote a future where medical experts seamlessly
          collaborate, possessing advanced skills and knowledge.
          <br />
          As Technomed group, we are proud to announce that the IMRT training
          program is designed to be held in collaboration with KOÇ University
          Hospital Center with KOÇ Hospital certification.
        </p>
      </div>
      <AcademyForm />
    </section>
  );
}

export default AcademyInfo;
