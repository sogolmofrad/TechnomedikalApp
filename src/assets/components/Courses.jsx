import AcademyForm from "./AcademyForm";
import CourseCard from "./CourseCard";
import styles from "./Courses.module.css";
const paragraph1 =
  "The IMRT Preceptorship is a structured training program meticulously crafted to equip clinical oncologists with an in-depth understanding of Intensity-Modulated Radiation Therapy (IMRT). This comprehensive course aims to elevate participants' knowledge and skills in the planning and delivery of IMRT treatments for cancer patients. Through a combination of didactic lectures, hands-on practical sessions, and case discussions, participants will gain expertise in IMRT techniques, treatment planning software, quality assurance, and patient safety.";
const cardHeading =
  "Intensity Modulated Radiation Therapy (IMRT), Implementation and Practice of Image-Guided Stereotactic Radiotherapy, Preceptorship Programs at Precision Oncology Clinic";
function Courses() {
  return (
    <section className={styles.coursesContainer}>
      <h1 style={{ textAlign: "center" }}>Current Courses </h1>
      <div className={styles.courses}>
        <div className={styles.information}>
          <CourseCard
            className="coursesCard"
            imgSrc="images/IMRT.jpg"
            imgAlt="IMRT"
            heading={cardHeading}
            paragraph1={paragraph1}
            paragraph2={`Deadline: 27-31 may 2024 \n  (registration closed)`}
            width="50%"
            height="58rem"
            btn1={true}
          />
          <a href="#futureCourses" className="btn btn-red">
            Future Courses
          </a>
        </div>
        <AcademyForm />
      </div>
    </section>
  );
}

export default Courses;
