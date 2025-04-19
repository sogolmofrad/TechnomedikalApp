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
        <div className={styles.blogContainer}>
          <div className="textBox">
            <h1>
              Technomed Academy’s First IMRT Training Program: A Step Towards
              Advancing Radiation Oncology
            </h1>
            <p>
              We are thrilled to announce that Technomed Academy successfully
              conducted its On-Site IMRT (Intensity-Modulated Radiation Therapy)
              training program at Koç University Hospital in Istanbul, Turkey,
              an institution affiliated with MD Anderson Cancer Center, from May
              27-30, 2024. Organized in collaboration with the Iranian Clinical
              Oncology Association and Koç University Hospital team members, the
              program was designed to enhance physicians' knowledge and skills
              in implementing innovative technologies in radiation oncology.
              <br />
              Our training courses focus on ensuring that advanced radiation
              oncology techniques, such as IMRT, SRS/SBRT, and more, are widely
              understood and effectively applied across the globe, particularly
              in the MENA region, to foster better patient outcomes.
              <br />
              Stay tuned for updates on our upcoming training programs as we
              continue to advance education and innovation in radiation
              oncology.
            </p>
          </div>
          <div className={styles.blogImageBoxes2}>
            <img
              className={styles.blogImage1}
              src="/images/imrt-1.gif"
              alt="doctor"
            />
            <img
              className={styles.blogImage2}
              src="/images/imrt-2.gif"
              alt="doctor"
            />
            <img
              className={styles.blogImage3}
              src="/images/imrt-3.gif"
              alt="doctor"
            />
          </div>
        </div>
        <div className={styles.blogContainer}>
          <div className="textBox">
            <h1>
              Antalya City Hospital Radiation Oncology Clinic Officially
              Launched
            </h1>
            <p>
              We are delighted to announce the grand opening of the Radiation
              Oncology Clinic at Antalya City Hospital, which took place on
              October 18, 2024, with a remarkable launch event held at the
              hospital.
              <br />
              The opening ceremony was attended by Prof. Dr. Behzat Özkan,
              Provincial Health Director; Prof. Dr. Mehmet Ali Gülçelik, Vice
              Rector of the University of Health Sciences and Dean of Gülhane
              Medical Faculty; Assoc. Prof. Dr. Nedim Ongun, Chief Physician of
              Antalya City Hospital; Assoc. Prof. Dr. Eda Küçüktülü,
              Administrative Head of the Radiation Oncology Clinic; members of
              the Board of Directors of the Turkish Radiation Oncology
              Association, as well as hospital administrators and staff.
              <br />
              The event featured a symposium highlighting the advanced
              technologies and innovative treatment approaches introduced by the
              Radiation Oncology Clinic, while also commemorating Breast Cancer
              Awareness Month.
              <br />
              Equipped with cutting-edge systems, the clinic is dedicated to
              delivering state-of-the-art cancer care, setting new standards in
              radiation therapy.
              <br />
              We are proud to contribute to the advancement of healthcare in
              Antalya and the surrounding areas, ensuring patients receive the
              highest quality of treatment. Stay tuned for more updates on our
              groundbreaking initiatives.
            </p>
          </div>
          <div className={styles.blogImageBoxes2}>
            <img
              className={styles.blogImage1}
              src="/images/blog-4-1.gif"
              alt="Hostpital"
            />
            <img
              className={styles.blogImage2}
              src="/images/blog-4-2.gif"
              alt="Hospital"
            />
            <img
              className={styles.blogImage3}
              src="/images/blog-4-3.gif"
              alt="Hospital"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
