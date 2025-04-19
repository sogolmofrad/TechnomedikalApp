import styles from "./AcademyForm.module.css";

function AcademyForm() {
  return (
    <div className={styles.formContainer} id="formRegistration">
      <h1>
        To get the pre-registration information
        <br />
        please fill out the form
        <br />
        and we contact you as soon as possible!
      </h1>
      <form
        className={styles.form}
        action="https://formsubmit.co/technoacademy@technomedikal.com"
        method="POST"
      >
        <div className={styles.formInputGroup}>
          <label>Full Name</label>
          <input
            type="text"
            name="full name"
            placeholder="Please enter your full name"
            required
          />
        </div>
        <div className={styles.formInputGroup}>
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="Please enter your email address"
            required
          />
        </div>
        <div className={styles.formInputGroup}>
          <label>Phone Number</label>
          <input
            name="phone number"
            type="phone"
            placeholder="Please enter your phone number"
            required
          />
        </div>
        <div className={styles.formInputGroup}>
          <label>Hospital / Company name</label>
          <input
            name="Center Name"
            type="text"
            placeholder="Please enter your center's name"
            required
          />
        </div>
        <div className={styles.formInputGroup}>
          <label>Field of Expertise</label>
          <select placeholder="please select your expertise" name="field">
            <option>Radiation Oncologist</option>
            <option>Medical Physicist</option>
            <option>Technicians</option>
            <option> Dosimetrist</option>
            <option>Other</option>
          </select>
        </div>
        <div className={styles.formInputGroup}>
          <label>Course Subject</label>
          <select placeholder="Course subject" name="courseSubject">
            <option>Intensity Modulated Radiation Therapy (IMRT)</option>
            <option>
              Implementation and Practice of Image-Guided Stereotactic
              Radiotherapy
            </option>
            <option>Preceptorship Programs at Precision Oncology Clinic</option>
          </select>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://technomedikal.com/thankyou"
        />
        <button type="submit" className="btn btn-blue">
          Get Course Information
        </button>
      </form>
    </div>
  );
}

export default AcademyForm;
