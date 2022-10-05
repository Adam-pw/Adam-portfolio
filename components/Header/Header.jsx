import React from "react";
import styles from "./Header.module.scss";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import animation from "./animation.json";

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
          <b>{"HI, I'M ADAM."}</b>
        </div>
        <div className={styles.main_p}>
          <b>{"A CREATIVE DEVELOPER & PROGRAMMER"}</b>
        </div>
        <div className={styles.main_pc}>{"DESIGN * PROGRAM * DEBUG"}</div>
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
