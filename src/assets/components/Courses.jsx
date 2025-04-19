import AcademyForm from "./AcademyForm";
import CourseCard from "./CourseCard";
import styles from "./Courses.module.css";
const paragraph1 =
  "Explore the best practices and new trends in Intensity-Modulated Radiation Therapy (IMRT). This on-site course is tailored for both beginner and experienced radiation therapists, along with medical physicists. Its main goal is to help participants meet current practice standards and stay updated with the latest advancements. Combining pre-recorded theoretical content and practical sessions, the course comprehensively covers treatment planning, image guidance, and delivery.";
const cardHeading = "Intensity Modulated Radiation Therapy (IMRT)";
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
            height="50rem"
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
