import styles from "./AboutUsPage.module.css";
import carolProfile from "../../assets/devs-profile-pictures/carol-profile.jpeg";
import lucasProfile from "../../assets/devs-profile-pictures/lucas-profile.jpeg";
import taisProfile from "../../assets/devs-profile-pictures/tais-profile.jpeg";
import thatyaraProfile from "../../assets/devs-profile-pictures/thatyara-profile.jpeg";
import viniCoelhoProfile from "../../assets/devs-profile-pictures/vini-coelho-profile.jpeg";
import viniMarquesProfile from "../../assets/devs-profile-pictures/vini-marques-profile.jpeg";

const DevProfile = (props) => {
  return (
    <div className={styles.developers_profile}>
      <img className={styles.dev_img} src={props.img} alt="developer profile picture" />
      <h2>{props.nome}</h2>
      <div className={styles.dev_socials}>
        <a href={props.linkedin} target="_blank" rel="noreferrer">
          <img
            className={styles.socials_img}
            src="../src/assets/logo-linkedin.svg"
            alt="Logo Fabebook"
          />
        </a>
        <a href={props.github} target="_blank" rel="noreferrer">
          <img
            className={styles.socials_img}
            src="../src/assets/logo-github.svg"
            alt="Logo GitHub"
          />
        </a>
      </div>
    </div>
  );
};

const AboutUsPage = () => {
  const devData = [
    {
      imgSrc: carolProfile,
      name: "Caroline Cobucci",
      linkedinSrc: "https://www.linkedin.com/in/caroline-cobucci/",
      githubSrc: "https://github.com/carolinecobucci",
    },
    {
      imgSrc: lucasProfile,
      name: "Lucas Gauto",
      linkedinSrc: "https://www.linkedin.com/in/devluksgauto/",
      githubSrc: "https://github.com/DevLuksgauto",
    },
    {
      imgSrc: taisProfile,
      name: "Tais Gehlen",
      linkedinSrc: "https://www.linkedin.com/in/tais-cristina-gehlen-a259b9106/",
      githubSrc: "https://github.com/taisgehlen",
    },
    {
      imgSrc: thatyaraProfile,
      name: "Thatyara Gomes",
      linkedinSrc: "https://www.linkedin.com/in/thatyara-alves/",
      githubSrc: "https://github.com/ThatyaraAlves",
    },
    {
      imgSrc: viniCoelhoProfile,
      name: "Vinicius Coelho",
      linkedinSrc: "https://www.linkedin.com/in/viniciusmeirelless/",
      githubSrc: "https://github.com/vimevili",
    },
    {
      imgSrc: viniMarquesProfile,
      name: "Vinicius Marques",
      linkedinSrc: "https://www.linkedin.com/in/vin%C3%ADcius-marques-2109ads/",
      githubSrc: "https://github.com/vinimarques7",
    },
  ];

  return (
    <div>
      <div className={styles.page_title}>
        <h1>Meet our team</h1>
        <p>These are the developers responsible for creating this page. Get to know us.</p>
      </div>
      <div className={styles.developers}>
        {devData.map((dev) => {
          return (
            <DevProfile
              key={dev.name}
              img={dev.imgSrc}
              nome={dev.name}
              linkedin={dev.linkedinSrc}
              github={dev.githubSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUsPage;
