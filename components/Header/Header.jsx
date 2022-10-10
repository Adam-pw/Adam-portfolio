import React from "react";
import styles from "./Header.module.scss";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import animation from "./animation.json";
import { Fade } from "react-reveal";

const Header = () => {
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <div className={styles.main_p}>
          <Fade left cascade>
            <b>{"HI, I'M ADAM."}</b>
          </Fade>
        </div>
        <div className={styles.main_p}>
          <Fade left cascade>
            <b>{"A CREATIVE DEVELOPER & PROGRAMMER"}</b>
          </Fade>
        </div>
        <Fade left cascade>
          <div className={styles.main_pc}>{"DESIGN * PROGRAM * DEBUG"}</div>
        </Fade>
        <div className={styles.buttonc} id="aboutme">
          <div className={styles.name}>{"     Got a project?     "}</div>
          <div>
            <button className={styles.button} type="button">
              {"Let's Talk"}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.photo}>
        <div className={styles.img}>{View}</div>
      </div>
    </div>
  );
};

export default Header;
