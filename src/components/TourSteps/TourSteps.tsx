import "./styles.scss";

export const steps: any = [
  {
    selector: '[data-tut="first__step"]',
    position: "top",
    style: {
      backgroundColor: "#fff",
    },
    content: function HelperComponent() {
      return (
        <div>
          <h5>
            <b>Hola!</b>
          </h5>
          <h6>Mi nombre es Bolo y estaré dandote un Tour por la aplicación</h6>
          <div className="img-container">
            <img src={"images/bolo1.png"} alt="Bolo" />
          </div>
        </div>
      );
    },
  },
  {
    selector: '[data-tut="second__step"]',
    content: function HelperComponent() {
      return (
        <div>
          <h6>Regístrate.</h6>
        </div>
      );
    },
    position: "top",
  },
  // ...
];
