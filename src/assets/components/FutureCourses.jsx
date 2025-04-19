import CourseCard from "./CourseCard";
import styles from "./FutureCourses.module.css";
const width = "25rem";
const height = "52rem";
const paragraph_1 =
  "This course aims to enhance the expertise of radiation oncology professionals ni SRS and SBRT techniques. Through pre-recorded lectures and hands-on sessions, participants will gain practical skills in treatment planning, motion management, and advanced dose delivery for various cancer types.";
const paragraph_2 =
  " Experience the intersection of expertise and dedication. Our program showcased Medicana Health Group's patient-centered care and precision medicine approach, proving that quality healthcare knows no boundaries.";

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
          btn2={true}
        />
        <CourseCard
          imgSrc="images/PrecisionOncology.jpg"
          imgAlt="Precision Oncology"
          heading="Precision-Oncology preceptorship program"
          paragraph1={paragraph_2}
          width={width}
          height={height}
          btn3={true}
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
