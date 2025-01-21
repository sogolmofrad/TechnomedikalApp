import AcademyForm from "./AcademyForm";
import styles from "./AcademyInfo.module.css";
function AcademyInfo() {
  return (
    <section className={styles.academyInfo}>
      <div className={styles.aboutTextBox}>
        <h1>Technomed Academy</h1>
        <p>
          Technomed Academy is a leader in transformative medical education,
          dedicated to advancing treatment knowledge and expertise across the
          healthcare sector. In collaboration with the Iranian Society of
          Clinical Oncology (ISCO), we proudly organize comprehensive training
          programs designed specifically for physicians in the field of
          radiation oncology. These programs focus on advanced cancer treatment
          techniques, blending on-site practical training with online
          theoretical sessions to deliver a holistic learning experience.
          <br />
          At Technomed Academy, our mission is to empower healthcare
          professionals with cutting-edge skills and knowledge, fostering
          innovation and excellence in patient care. We are committed to shaping
          the future of healthcare by emphasizing continuous learning and
          enabling global collaboration among medical experts.
          <br />
          Our vision is a world where healthcare professionals work seamlessly
          together, equipped with advanced expertise to drive better treatment
          outcomes and improve the quality of care worldwide.
        </p>
      </div>
      <AcademyForm />
    </section>
  );
}

export default AcademyInfo;
