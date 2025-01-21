import styles from "./CourseCard.module.css";
function CourseCard({
  className,
  imgSrc,
  imgAlt,
  heading,
  paragraph1,
  paragraph2,
  paragraph3,
  width,
  height,
  btn1,
  btn2,
  btn3,
}) {
  return (
    <div
      className={`${styles.card} ${className}`}
      style={{ width: `${width}`, height: `${height}` }}
    >
      <div className={styles.cardImage}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.cardText}>
        <h3>{heading}</h3>
        <p>{paragraph1}</p>
        <p>{paragraph3}</p>
        {btn1 && (
          <p>
            <a
              href="Technomed.pdf"
              download="brochure"
              className={`btn btn-blue ${styles.headerBtn}`}
            >
              Information
            </a>
          </p>
        )}
        {btn2 && (
          <p style={{ marginBottom: "2rem" }}>
            <a
              href="Techno2.pdf"
              download="brochure"
              className={`btn btn-blue ${styles.headerBtn}`}
            >
              Information
            </a>
          </p>
        )}
        {btn3 && (
          <p>
            <a
              href="#formRegistration"
              className={`btn btn-blue ${styles.headerBtn}`}
            >
              Pre register
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
