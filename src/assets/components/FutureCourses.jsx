import CourseCard from "./CourseCard";
import styles from "./FutureCourses.module.css";
const width = "25rem";
const height = "52rem";
const paragraph_1 =
  "This course covers various clinical practice parameters, including sarcomas, pediatrics, and the importance of radiotherapy in cancer patient management. Also it explores topics such as patient immobilization, treatment planning, quality assurance, and the clinical applications of SBRT.";
const paragraph_2 =
  " The aim is to delve into real-world case scenarios during Molecular Tumor Board sessions, unravel the intricacies of Comprehensive Genomic Profiling, and explore the nuances of genomic alterations";

const paragraph_3 =
  "The Basics of Laparoscopy course aims to provide a foundational understanding of essential laparoscopic techniques and Robotic surgery.";
function FutureCourses() {
  return (
    <section className={styles.futureCourses} id="futureCourses">
      <h1>Future Courses</h1>
      <div className={styles.coursesContainer}>
        <CourseCard
          imgSrc="images/Stereotactic.jpg"
          imgAlt="Stereotactic"
          heading="Stereotactic Body Radiation Therapy (SBRT)"
          paragraph1={paragraph_1}
          width={width}
          height={height}
        />
        <CourseCard
          imgSrc="images/PrecisionOncology.jpg"
          imgAlt="Precision Oncology"
          heading="Precision-Oncology preceptorship program"
          paragraph1={paragraph_2}
          width={width}
          height={height}
        />
        <CourseCard
          imgSrc="images/laparascopyRoboticSurgery.jpg"
          imgAlt="Laparascopy and Robotic Surgery"
          heading="Basics of Laparoscopic and Robotic course"
          paragraph1={paragraph_3}
          width={width}
          height={height}
        />
      </div>
    </section>
  );
}

export default FutureCourses;
