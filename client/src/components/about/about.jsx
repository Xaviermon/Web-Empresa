import styles from "./about.module.css";
import imgMau from "../../../asset/img/team/imgMau.jpg";

const memberData = [
  {
    name: "Javier Nicolas Figueroa Aguayo",
    rol: "Frontend Developer & Técnico en Informática",
    image: "miembro1.jpg",
    bio: "Javi es un desarrollador front-end con un ojo agudo para el diseño. Le encanta crear interfaces de usuario perfectas y generar interacciones suaves para los usuarios.",
    location: "Santiago , Chile",
  },
  {
    name: "Leandro Martínez",
    rol: "Full Stack Developer ",
    image: "miembro2.jpg",
    bio: "Lean es una desarrolladora Full Stack  que se especializa en el back-end.se Construye soluciones sólidas y escalables en el lado del servidor. Siente pasión por optimizar el código para un rendimiento máximo.",
    location: "Buenos Aires  , Argentina ",
  },
  {
    name: "Xavier Montero",
    rol: "Desarrollador Full-Stack",
    image: "miembro3.jpg",
    bio: "Xavi es un desarrollador full-stack que disfruta trabajando tanto en el front-end como en el back-end. Es un apasionado en solucionar problemas y le encanta explorar nuevas tecnologías.",
    location: "Buenos Aires  , Peru ",
  },
  {
    name: "Mauro José Ciappina",
    rol: "Full Stack Developer & Comunicador Audiovisual ",
    image: imgMau,
    bio: "Mauro es un desarrollador full-stack, combina su conocimiento en comunicación audiovisual para crear interfaces de usuario creativas y atractivas, aplicando su experiencia en ambos campos.",
    location: "Mar del Plata  , Argentina ",
  },
];

const About = () => {
  const highlightSection = (title, description) => (
    <div className={styles.highlightSection}>
      <h2 className={styles.highlightTitle}>{title}</h2>
      <p className={styles.highlightDescription}>{description}</p>
    </div>
  );

  const teamMember = (member) => (
    <div className={`${styles.member} ${styles.card}`} key={member.index}>
      <div className={styles.imageContainer}>
        <img
          src={member.image}
          alt={`Miembro ${member.index + 1}`}
          className={styles.memberImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.memberName}>{member.name}</h2>
        <h5 className={styles.memberRole}>{member.rol}</h5>
        <p className={styles.memberBio}>{member.bio}</p>
        <h7 className={styles.memberLocation}>{member.location}</h7>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Acerca de Nuestra Startup</h1>
      <p className={styles.description}>
        Somos un equipo de cuatro personas apasionadas dedicadas a crear
        soluciones web innovadoras e impactantes. Nuestro viaje comenzó con una
        visión compartida de transformar ideas en realidad y proporcionar
        experiencias en línea excepcionales.
      </p>
      <div className={styles.separator}></div>
      <h2 className={styles.title}>Historia y Visión</h2>
      <p className={styles.description}>
        `En "Rota", creemos que la innovación es la fuerza impulsora que da
        forma al mundo que nos rodea. Nuestra historia tiene sus raíces en el
        pasado, en la simple pero poderosa invención que cambió el curso de la
        historia: la rueda. Como un tributo a este icónico símbolo de progreso,
        nació "Rota". La rueda, que revolucionó la forma en que la humanidad se
        movía y se conectaba, es el corazón latente de nuestra visión.`
      </p>
      <div className={styles.separator}></div>
      <h2 className={styles.title}>Fundadores y Pasiones</h2>
      <p className={styles.description}>
        Detrás de "Rota" se encuentra un equipo apasionado y dedicado de mentes
        creativas y visionarias. Nuestros fundadores, [Nombre del Fundador 1],
        [Nombre del Fundador 2], [Nombre del Fundador 3] y [Nombre del Fundador
        4], comparten una profunda pasión por la innovación tecnológica y la
        búsqueda constante de nuevas formas de avanzar. Con antecedentes en
        [Breve descripción de la experiencia y conocimientos de los fundadores],
        se unieron para dar vida a la visión de "Rota" y continuar el legado de
        la rueda como un símbolo eterno de cambio y mejora.
      </p>
      <div className={styles.separator}></div>

      <h2 className={styles.teamTitle}>Conoce a Nuestro Equipo</h2>
      <div className={styles.teamSection}>
        {memberData.map((member) => teamMember(member))}
      </div>
    </div>
  );
};

export default About;
