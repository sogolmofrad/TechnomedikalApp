import styles from "./Contact.module.css";
import Navigation from "../assets/components/Navigation";
import Form from "../assets/components/Form";

function Contact() {
  return (
    <div>
      <Navigation />
      <div className={styles.contact}>
        <div className="textBox" style={{ color: "#fff", flex: "0 0 30%" }}>
          <h1>Contact Us</h1>
          <p style={{ textTransform: "uppercase" }}>
            you can contact us by feeling the form here,
            <br /> and we will send you the information you need as soon as
            possible
          </p>
          <br />
          <p className={styles.contactInfo}>
            <span>
              <img src="images/icons8-mail-50.png" alt="email" />
            </span>
            <span>info@technomedikal.com</span>
          </p>
          <p className={styles.contactInfo}>
            <span>
              <img src="images/icons8-phone-50.png" alt="phone" />
            </span>
            <span>+90(546)4697973</span>
          </p>
          <p className={styles.contactInfo}>
            <span>
              <img src="images/icons8-location-50.png" alt="location" />
            </span>
            <span>
              Mecidiyeköy Mahallesi, Burç Sk, Burç Apt, NO:1/1, 34387, Şişli,
              Istanbul/Turkey
            </span>
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Contact;
