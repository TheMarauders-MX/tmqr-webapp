import "./styles.scss";
import Tour from "reactour";
import { useHistory } from "react-router-dom";

interface UserTourProps {
  isOpen: any;
  closeTour: any;
  stepStartAt: any;
}

export const UserTour = (props: UserTourProps) => {
  const history = useHistory();

  function redirectClose() {
    history.push("/home");
    props.closeTour();
  }

  const steps: any = [
    {
      selector: '[data-tut="first__step"]',
      position: "top",
      style: {
        backgroundColor: "#fff",
      },
      content: () => {
        return (
          <div>
            <div className="step_container">
              <h5>
                <b>Hola!</b>
              </h5>
              <h6>Mi nombre es Bolo y estaré dandote un Tour por la aplicación "Todo el mundo en un QR"</h6>
              <img src={"images/bolo1.png"} alt="Bolo" />
            </div>
          </div>
        );
      },
    },
    // You would likely have more steps here for your initial page.
    {
      selector: '[data-tut="second__step"]',
      // action: redirectClose(),
      // nextButton: history.push("/home"),
      content: () => {
        // redirectClose();
        return (
          <div>
            <div className="step_container">
              <h5>
                {" "}
                <b>¡Registrate!</b>
              </h5>
              <h6>¡Ayúdanos identificándote! </h6>
              <h6> Asi podremos ofrecerte las mejores promociones.</h6>
            </div>
          </div>
        );
      },
    },
    {
      selector: '[data-tut="third__step"]',
      content: () => {
        return (
          <div>
            <div className="step_container">
              <h5>
                <b>Barra de navegación</b>
              </h5>
              <h6>Da clic aquí para dirigirte a otra sección de la página.</h6>
              <img src={"images/bolo2.png"} alt="Bolo" />
            </div>
          </div>
        );
      },
    },
    {
      // We are then on the correct page to carry on.
      selector: '[data-tut="fourth__step"]',
      content: () => {
        return (
          <div>
            <div className="step_container">
              <h5>
                <b>Navega!</b>
              </h5>
              <h6>Comienza a explorar nuestra aplicación.</h6>
              <h6>Diviértete!</h6>
              <img src={"images/bolo3.png"} alt="Bolo" />
            </div>
          </div>
        );
      },
    },
  ];

  return <Tour steps={steps} isOpen={props.isOpen} onRequestClose={props.closeTour} startAt={props.stepStartAt} />;
};

// export const steps: any = [
//   {
//     selector: '[data-tut="first__step"]',
//     position: "top",
//     style: {
//       backgroundColor: "#fff",
//     },
//     content: function HelperComponent() {
//       return (
//         <div>
//           <div className="step_container">
//             <h5>
//               <b>Hola!</b>
//             </h5>
//             <h6>Mi nombre es Bolo y estaré dandote un Tour por la aplicación "Todo el mundo en un QR"</h6>
//             <img src={"images/bolo1.png"} alt="Bolo" />
//           </div>
//         </div>
//       );
//     },
//   },
//   {
//     selector: '[data-tut="second__step"]',
//     content: function HelperComponent() {
//       return (
//         <div>
//           <div className="step_container">
//             <h5>
//               {" "}
//               <b>¡Registrate!</b>
//             </h5>
//             <h6>¡Ayúdanos identificándote! </h6>
//             <h6> Asi podremos ofrecerte las mejores promociones.</h6>
//           </div>
//         </div>
//       );
//     },
//     position: "top",
//   },
//   {
//     selector: '[data-tut="third__step"]',
//     content: function HelperComponent() {
//       history.push("/home");
//       // history.push("/home");
//       return (
//         <div>
//           <div className="step_container">
//             <h5>
//               {" "}
//               <b>Da clic en las imágenes.</b>
//             </h5>
//             <h6>De esta manera podemos mostrarte las últimas promociones. </h6>
//           </div>
//         </div>
//       );
//     },
//     position: "top",
//   },
//   // ...
// ];
