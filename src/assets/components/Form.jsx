import styles from "./Form.module.css";
function Form() {
  return (
    <div className={styles.formContainer}>
      <h1>
        we love to hear from you <br /> let’s get in touch
      </h1>
      <form
        className={styles.form}
        action="https://formsubmit.co/info@technomedikal.com"
        method="POST"
      >
        <div className={styles.formInputGroup}>
          <label for="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Please enter your full name"
          />
        </div>
        <div className={styles.formInputGroup}>
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Please enter your email address"
          />
        </div>
        <div className={styles.formInputGroup}>
          <label for="phone">Phone Number</label>
          <input
            type="phone"
            id="phone"
            placeholder="Please enter your phone number"
          />
        </div>
        <div className={styles.formInputGroup}>
          <label for="text">Your Message</label>
          <textarea
            type="textarea"
            id="text"
            placeholder="Please write down your message to us"
          />
        </div>
        <button className="btn btn-blue">send message</button>
      </form>
    </div>
  );
}

export default Form;
