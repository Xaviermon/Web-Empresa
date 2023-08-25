import styles from "./about.module.css";
import imgMau from "../../../asset/img/team/imgMau.jpg";
import Nav from "../nav/nav";
import Footer from "../footer/footer";

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
    bio: "Lean es una desarrolladora Full Stack  que se especializa en el back-end.Construye soluciones sólidas y escalables en el lado del servidor. Siente pasión por optimizar el código para un rendimiento máximo.",
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
  const highlightSection = (title, description) => {
    return (
      <div className={styles.highlightSection}>
        <h2 className={styles.highlightTitle}>{title}</h2>
        <p className={styles.highlightDescription}>{description}</p>
      </div>
    );
  };

  const teamMember = (member) => {
    return (
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
  };

  return (
    <div className={styles.container}>
      <Nav />
      <h1 className={styles.title}>Acerca de Nuestra Startup</h1>
      <p className={styles.description}>
        En BurguerByte, nos destacamos como un equipo apasionado de
        desarrolladores fullstack con una visión compartida: convertir la
        tecnología en soluciones innovadoras y prácticas. Combinamos una
        diversidad de habilidades, desde el frontend hasta el backend, y un
        enfoque en la excelencia técnica para crear soluciones completas y
        creativas. Nuestra pasión por la tecnología se refleja en cada proyecto
        que emprendemos, mientras construimos relaciones sólidas con nuestros
        clientes a través de la colaboración y la innovación constante. En
        BurguerByte, estamos comprometidos con la vanguardia de la industria y
        ansiosos por continuar construyendo un futuro donde la tecnología se
        funde con la creatividad para crear un impacto duradero en el mundo
        digital.
      </p>
      <div className={styles.separator}></div>
      <h2 className={styles.title}>Historia y Visión</h2>
      <p className={styles.description}>
        Nuestra misión en BurguerByte es transformar el mundo de la tecnología,
        una línea de código a la vez. Nos comprometemos a proporcionar
        soluciones fullstack innovadoras y personalizadas que se adapten a las
        necesidades únicas de cada cliente. A través de nuestra dedicación a la
        excelencia técnica y nuestra pasión por la creatividad, buscamos
        empoderar a empresas de todos los tamaños para que abracen el potencial
        de la era digital y logren sus objetivos con confianza. En BurguerByte,
        no solo construimos aplicaciones y plataformas; construimos puentes
        entre la imaginación y la realidad, creando un impacto duradero en el
        mundo tecnológico.
      </p>
      <div className={styles.separator}></div>
      <h2 className={styles.title}>Fundadores y Pasiones</h2>
      <p className={styles.description}>
        Detrás de BurguerByte se encuentra un equipo apasionado y dedicado de
        mentes creativas y visionarias. Nuestros fundadores, Javier Figueroa,
        Xavier Montero, Leandro Martinez y Mauro Ciappina, comparten una
        profunda pasión por la innovación tecnológica y la búsqueda constante de
        nuevas formas de avanzar. Con antecedentes en desarrollo backend,
        frontend, base de datos, aplicaciones móviles y desarrollo FullStack, se
        unieron para dar vida a la visión de BurguerByte y continuar marcando la
        pauta en la innovación tecnológica.
      </p>
      <div className={styles.separator}></div>

      <h2 className={styles.teamTitle}>Conoce a Nuestro Equipo</h2>
      <div className={styles.teamSection}>
        {memberData.map((member) => teamMember(member))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
