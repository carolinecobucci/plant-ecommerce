import styles from "./AboutUsPage.module.css";
import carolProfile from "../../assets/devs-profile-pictures/carol-profile.jpeg";
import lucasProfile from "../../assets/devs-profile-pictures/lucas-profile.jpeg";
import taisProfile from "../../assets/devs-profile-pictures/tais-profile.jpeg";
import thatyaraProfile from "../../assets/devs-profile-pictures/thatyara-profile.jpeg";
import viniCoelhoProfile from "../../assets/devs-profile-pictures/vini-coelho-profile.jpeg";
import viniMarquesProfile from "../../assets/devs-profile-pictures/vini-marques-profile.jpeg";

const AboutUsPage = () => {
  return (
    <div>
      <div className={styles.page_title}>
        <h1>Meet our team</h1>
        <p>These are the developers responsible for creating this page.</p>
      </div>
      <div className={styles.developers}>
        <div className={styles.developers_profile}>
          <img src={carolProfile} alt="developer profile picture" />
          <h2>Caroline Cobucci</h2>
        </div>
        <div className={styles.developers_profile}>
          <img src={lucasProfile} alt="developer profile picture" />
          <h2>Lucas Gauto</h2>
        </div>
        <div className={styles.developers_profile}>
          <img src={taisProfile} alt="developer profile picture" />
          <h2>Tais Gehlen</h2>
        </div>
        <div className={styles.developers_profile}>
          <img src={thatyaraProfile} alt="developer profile picture" />
          <h2>Thatyara Gomes</h2>
        </div>
        <div className={styles.developers_profile}>
          <img src={viniCoelhoProfile} alt="developer profile picture" />
          <h2>Vinicius Coelho</h2>
        </div>
        <div className={styles.developers_profile}>
          <img src={viniMarquesProfile} alt="developer profile picture" />
          <h2>Vinicius Marques</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
