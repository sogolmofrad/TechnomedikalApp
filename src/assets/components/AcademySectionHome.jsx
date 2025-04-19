import styles from "./AcademySectionHome.module.css";
function AcademySectionHome() {
  return (
    <section className={styles.academySection}>
      <div className={styles.academyInfo}>
        <div className="textBox">
          <h1> Our Academy</h1>
          <p>
            At Technomed Academy, our mission is to empower healthcare
            professionals with cutting-edge skills and knowledge, fostering
            innovation and excellence in patient care. We are committed to
            shaping the future of healthcare by emphasizing continuous learning
            and enabling global collaboration among medical experts.
          </p>
        </div>
        <figure className={styles.academyImage}>
          <img src="/images/academy-home.gif" alt="Academy" />
        </figure>
      </div>
      <div className={styles.academyInfo}>
        <div className="textBox">
          <h1> Our Newest Center</h1>
          <p>
            We are proud to announce the launch of our first city hospital
            project: Antalya City Hospital in Antalya. This state-of-the-art
            facility, with a total capacity of 1,500 beds, has officially
            commenced patient treatment in its Radiation Oncology Department,
            equipped with premium segment LINAC systems and cutting-edge
            technologies. The clinical team is dedicated to implementing
            innovative radiation therapy techniques, positioning the department
            to transform cancer care in the region.
          </p>
        </div>
        <figure className={styles.academyImage}>
          <img src="/images/blog-4-1.gif" alt="Academy" />
        </figure>
      </div>
    </section>
  );
}

export default AcademySectionHome;
