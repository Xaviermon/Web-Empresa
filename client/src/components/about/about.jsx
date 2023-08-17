import styles from "./about.module.css";
import imgMau from "../../../asset/img/team/imgMau.jpg";

const memberData = [
  {
    name: "Javier Nicolas Figueroa Aguayo",
    rol: "Frontend Developer & Técnico en Informática",
    image: "miembro1.jpg",
    bio: "Javi es un desarrollador front-end con un ojo agudo para el diseño. Le encanta crear interfaces de usuario perfectas y generar interacciones suaves para los usuarios.",
  },
  {
    name: "Leandro Martínez",
    rol: "Full Stack Developer ",
    image: "miembro2.jpg",
    bio: "Lean es una desarrolladora Full Stack  que se especializa en el back-end.se Construye soluciones sólidas y escalables en el lado del servidor. Siente pasión por optimizar el código para un rendimiento máximo.",
  },
  {
    name: "Xavier Montero",
    rol: "Desarrollador Full-Stack",
    image: "miembro3.jpg",
    bio: "Xavi es un desarrollador full-stack que disfruta trabajando tanto en el front-end como en el back-end. Es un apasionado en solucionar problemas y le encanta explorar nuevas tecnologías.",
  },
  {
    name: "Mauro José Ciappina",
    rol: "Full Stack Developer & Comunicador Audiovisual ",
    image: imgMau,
    bio: "Mauro es un desarrollador full-stack, combina su conocimiento en comunicación audiovisual para crear interfaces de usuario creativas y atractivas, aplicando su experiencia en ambos campos.",
  },
];

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Acerca de Nuestra Startup</h1>
      <p className={styles.description}>
        Somos un equipo de cuatro personas apasionadas dedicadas a crear
        soluciones web innovadoras e impactantes. Nuestro viaje comenzó con una
        visión compartida de transformar ideas en realidad y proporcionar
        experiencias en línea excepcionales.
      </p>

      {/* Separadores creativos */}
      <div className={styles.separator}></div>

      <h2 className={styles.teamTitle}>Conoce a Nuestro Equipo</h2>
      <div className={styles.teamSection}>
        {memberData.map((member, index) => (
          <div className={`${styles.member} ${styles.card}`} key={index}>
            <div className={styles.imageContainer}>
              <img
                src={member.image}
                alt={`Miembro ${index + 1}`}
                className={styles.memberImage}
              />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.memberName}>{member.name}</h2>
              <h5 className={styles.memberRole}>{member.rol}</h5>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
