import styles from "./contrata.module.css";
import Nav from "../nav/nav";
import Footer from "../footer/footer";

const Contrata = () => {
  return (
    <>
      <Nav />
      <section className={styles.container}>
        <div className={styles.containerTitle}>
          <h1
            className={`${styles.text4xl} ${styles.fontBold} ${styles.textGray800} ${styles.darkTextGray100}`}
          >
            Precios Simples y Transparentes
          </h1>
          <p
            className={`${styles.mt4} ${styles.textGray500} ${styles.darkTextGray400}`}
          >
            Sin Contratos. Sin tarifas sorpresa.
          </p>
        </div>
        <div
          className={`container ${styles.px6} ${styles.py8} ${styles.mxAuto}`}
        >
          <div
            className={`${styles.overflowHidden} ${styles.p05} ${styles.mt6} ${styles.border} ${styles.roundedLg} ${styles.darkBorderGray700}`}
          >
            <div className={`${styles.smMx05} ${styles.flex}`}>
              <button
                className={`${styles.focusOutlineNone} ${styles.px3} ${styles.w12} ${styles.smWAuto} ${styles.py1} ${styles.smMx05} ${styles.textWhite} ${styles.bgBlue500} ${styles.roundedLg}`}
              >
                Mensual
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.smFlex} ${styles.smItemsCenter} ${styles.smJustifyBetween}`}
        >
          <div
            className={`${styles.grid} ${styles.gap6} ${styles.mt16} ${styles.mxN6} ${styles.smGap8} ${styles.smGridCols2} ${styles.lgGridCols3} ${styles.xlGridCols4}`}
          >
            <div
              className={`${styles.px6} ${styles.py4} ${styles.transitionColors} ${styles.duration200} ${styles.transform} ${styles.roundedLg} ${styles.hoverBgGray200} ${styles.darkHoverBgGray700}`}
            >
              <p
                className={`${styles.textLg} ${styles.fontMedium} ${styles.textGray800} ${styles.darkTextGray100}`}
              >
                Intro
              </p>
              <h4
                className={`${styles.mt2} ${styles.text4xl} ${styles.fontSemibold} ${styles.textGray800} ${styles.darkTextGray100}`}
              >
                $19{" "}
                <span
                  className={`${styles.textBase} ${styles.fontNormal} ${styles.textGray600} ${styles.darkTextGray400}`}
                >
                  / Mes
                </span>
              </h4>
              <p
                className={`${styles.mt4} ${styles.textGray500} ${styles.darkTextGray300}`}
              >
                Para la mayoría de las empresas que desean optimizar las
                consultas web.
              </p>
              <div className={`${styles.mt8} ${styles.spaceY8}`}>
                <div className={`${styles.flex} ${styles.itemsCenter}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.w5} ${styles.h5} ${styles.textBlue500}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className={`${styles.mx4} ${styles.textGray700} ${styles.darkTextGray300}`}
                  >
                    Todos los enlaces limitados
                  </span>
                </div>
                {/* Resto de los ítems... */}
              </div>
              <button
                className={`${styles.wFull} ${styles.px4} ${styles.py2} ${styles.mt10} ${styles.fontMedium} ${styles.trackingWide} ${styles.textWhite} ${styles.capitalize} ${styles.transitionColors} ${styles.duration200} ${styles.transform} ${styles.bgBlue500} ${styles.roundedMd} ${styles.hoverBgBlue600} ${styles.focusOutlineNone} ${styles.focusBgBlue600}`}
              >
                Contratar Plan
              </button>
            </div>

            {/* Otro plan */}
            <div
              className={`${styles.px6} ${styles.py4} ${styles.transitionColors} ${styles.duration200} ${styles.transform} ${styles.roundedLg} ${styles.hoverBgGray200} ${styles.darkHoverBgGray700}`}
            >
              <p
                className={`${styles.textLg} ${styles.fontMedium} ${styles.textGray800} ${styles.darkTextGray100}`}
              >
                Avanzado
              </p>
              <h4
                className={`${styles.mt2} ${styles.text4xl} ${styles.fontSemibold} ${styles.textGray800} ${styles.darkTextGray100}`}
              >
                $39{" "}
                <span
                  className={`${styles.textBase} ${styles.fontNormal} ${styles.textGray600} ${styles.darkTextGray400}`}
                >
                  / Mes
                </span>
              </h4>
              <p
                className={`${styles.mt4} ${styles.textGray500} ${styles.darkTextGray300}`}
              >
                Para empresas que buscan expandir su presencia en línea y
                maximizar la eficiencia.
              </p>
              <div className={`${styles.mt8} ${styles.spaceY8}`}>
                <div className={`${styles.flex} ${styles.itemsCenter}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.w5} ${styles.h5} ${styles.textBlue500}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className={`${styles.mx4} ${styles.textGray700} ${styles.darkTextGray300}`}
                  >
                    Enlaces ilimitados y soporte premium
                  </span>
                </div>
              </div>
              <button
                className={`${styles.wFull} ${styles.px4} ${styles.py2} ${styles.mt10} ${styles.fontMedium} ${styles.trackingWide} ${styles.textWhite} ${styles.capitalize} ${styles.transitionColors} ${styles.duration200} ${styles.transform} ${styles.bgBlue500} ${styles.roundedMd} ${styles.hoverBgBlue600} ${styles.focusOutlineNone} ${styles.focusBgBlue600}`}
              >
                Contratar Plan
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contrata;
