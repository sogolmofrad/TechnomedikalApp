import CourseCard from "./CourseCard";
import styles from "./Courses.module.css";
const paragraph1 =
  "The IMRT Preceptorship is a structured training program meticulously crafted to equip clinical oncologists with an in-depth understanding of Intensity-Modulated Radiation Therapy (IMRT). This comprehensive course aims to elevate participants' knowledge and skills in the planning and delivery of IMRT treatments for cancer patients. Through a combination of didactic lectures, hands-on practical sessions, and case discussions, participants will gain expertise in IMRT techniques, treatment planning software, quality assurance, and patient safety.";

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
            heading="Introduction to the Significance of İntensity Modulated Radiation
          Therapy (IMRT) in Modern Radiation Oncology"
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
        <div className={styles.courseInfo}>
          <h2> Why KOÇ Hospital?</h2>
          <p>
            Koç University Hospital, a leading institution in healthcare,
            prioritizes ethical values, innovative approaches, and international
            standards in education, research, and healthcare services. The
            hospital's collaboration with <b>MD Anderson Cancer Center</b> and
            its team of highly skilled professors and medical professionals who
            are members of the <b>Türkiye Radiation Oncology Association</b>,
            highlights their commitment to delivering cutting-edge radiation
            oncology treatments and practices.
          </p>
          <div className={styles.aboutImageBox}>
            <img src="images/koc-hospital.png" alt="Koc Hospital" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
