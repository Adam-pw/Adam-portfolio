import React, { useContext } from "react";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import styles from "./Preloader.module.scss";
import animationData from "./spinner.json";

export default function PreLoader({ isLoaded }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const options = {
    animationData: animationData,
    loop: true,
    width: "200",
    height: "200",
  };
  const { View } = useLottie(options);

  return (
    <>
      <div className={`${styles.preloader} ${isLoaded ? styles.loaded : null}`}>
        <div className={styles.mid}>{View}</div>
      </div>
    </>
  );
}
