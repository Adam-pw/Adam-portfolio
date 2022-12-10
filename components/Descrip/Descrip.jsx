import React from "react";
import styles from "./Descrip.module.scss";
import Fade from "react-reveal/Fade";
import Stars from "../Stars/Stars";

const Descrip = () => {
  return (
    <>
      <section
        style={{ backgroundImage: "url(/images/scrol.jpg)" }}
        className={styles["section-background"]}
      >
          <Fade bottom>
            <div className={styles.main}>
              <div className={styles.area1}>
                <div className={styles.name}>Adam Pithenwala</div>
                <div className={styles.heading}>
                  <b>{"Creative & Modern Approach"}</b>
                </div>
              </div>
              <div className={styles.area2}>
                <div className={styles.head}>
                  <b>
                    {
                      "I am pursuing Bechelor of Technology in Artificial Intelligence & Data Science. With skill set of Web Development, Machine learning and Problem solving."
                    }
                  </b>
                </div>
                <div className={styles.subhead}>
                  Completed my higher education from Gyan Sagar Academy, Ujjain.
                  Currently student of Madhav Institute of Technology & Science,
                  Gwalior.
                </div>
                <div className={styles.info}>
                  <div>BORN IN</div>
                  <div>COLLEGE</div>
                  <div>DATE OF BIRTH</div>
                </div>
                <div className={styles.info2}>
                  <div>
                    <b>Ujjain, India</b>
                  </div>
                  <div>
                    <b>MITS, Gwalior</b>
                  </div>
                  <div>
                    <b>08 January 2003</b>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className={styles.main2}>
              <div className={styles.one}>
                <div className={styles.namehead}>1+</div>
                <div className={styles.namesub}>
                  <b>YEARS OF EXPERIENCE</b>
                </div>
              </div>
              <div className={styles.two}>
                <div className={styles.namehead}>15+</div>
                <div className={styles.namesub}>
                  <b>PROJECTS COMPLETED</b>
                </div>
              </div>
              <div className={styles.one}>
                <div className={styles.namehead}>7+</div>
                <div className={styles.namesub}>
                  <b>HAPPY CLIENTS</b>
                </div>
              </div>
            </div>
          </Fade>
      </section>
    </>
  );
};

export default Descrip;
