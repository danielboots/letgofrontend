import styles from "@/styles/Hero.module.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Header from "./Header";

export default function Hero() {
  return (
    <div>
      <div className={styles.herohome}>
        <h1 className=" font-lake text-center  z-20 animate-pulse   ">
          Let Go Records
        </h1>
      </div>
    </div>
  );
}
