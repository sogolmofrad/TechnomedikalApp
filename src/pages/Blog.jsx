import styles from "./Blog.module.css";
import Navigation from "../assets/components/Navigation";

function Blog() {
  return (
    <div>
      <Navigation />
      <section className={styles.blog}>
        <div className={styles.blogContainer}>
          <div className="textBox">
            <h1> Smart Rediotherapy in Cancer Treatment</h1>
            <p>
              In recent times, MR- Linac has emerged as a significant
              advancement in the world. Cancer stands as one of the most
              critical diseases in need of treatment in the medical field. Prof.
              Dr. Sedat Koca, radiation oncology professor at Medicana Ataşehir
              Hospital, highlighted the rise of MR-Linac, emphasizing that this
              technology directly targets tumors with minimal damage to healthy
              tissues. He mentioned that smart radiotherapy, which provides
              real-time imaging to patients, can be applied to all types of
              cancer.
              <br />
              Under the leadership of Prof.Dr. Koca, a program titled “Smart
              Radiotherapy in Cancer Treatment” was organized on December 1st,
              with guest physicians and specialists participating. During the
              event, discussions focused on the era of smart radiotherapy and
              its applications in cancer treatment. Reha Özkaya, Member of the
              Board and CEO of Medicana Health Group, highlighted Medicana's
              investments nationally and internationally in evolving technology
              pathways.
              <br />
              Prof. Koca stressed that the goal of radiotherapy in cancer
              treatment is to eradicate or control tumor tissues by using
              advanced technology that includes real-time imaging. This method
              allows for precise treatment tailored to individual patients.
              <br />
              Prof. Koca further explained the benefits of real-time imaging in
              radiotherapy, where MR scanning during treatment shows the
              position, size, and shape of tumors in three dimensions, aiding in
              precise intervention while minimizing damage to healthy tissues.
              This leads to enhanced tumor control and evaluation of clinical
              changes after each session, providing significant treatment
              opportunities for patients.
              <br />
              Overall, these advancements in radiotherapy promise more effective
              cancer treatment outcomes, with less impact on healthy tissues,
              providing hope for better patient care and management.
            </p>
          </div>
          <div className={styles.blogImageBoxes}>
            <img
              className={styles.blogImage1}
              src="images/blog-1.gif"
              alt="doctor"
            />
            <img
              className={styles.blogImage2}
              src="images/blog-2.gif"
              alt="doctor"
            />
            <img
              className={styles.blogImage3}
              src="images/blog-3.gif"
              alt="doctor"
            />
          </div>
        </div>
        <div className={styles.blogContainer}>
          <div className="textBox">
            <h1>
              The 8th International Clinical Radiation Oncology Congress (ISRO),
              Tehran, Iran
            </h1>
            <p>
              Technomed was honored to participate in the 8th International
              Clinical Radiation Oncology Congress, an inspiring gathering of
              experts in the field. Special thanks to the Iranian Radiation
              Oncology Association team for their outstanding organization,
              seamless execution, and insightful discussions that made the event
              truly remarkable for all attendees
            </p>
          </div>
          <div className={styles.blogImageBoxes2}>
            <img
              className={styles.blogImage1}
              src="images/blog-4.gif"
              alt="doctor"
            />
            <img
              className={styles.blogImage2}
              src="images/blog-5.gif"
              alt="doctor"
            />
            <img
              className={styles.blogImage3}
              src="images/blog-6.gif"
              alt="doctor"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
