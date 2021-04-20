export const steps: any = [
  {
    selector: ".first-step",
    position: "top",
    style: {
      backgroundColor: "#fff",
    },
    content: function HelperComponent() {
      return (
        <div>
          <img src={"images/bolo1.png"} alt="Bolo" />
          <h5>
            <b>Hola!</b>
          </h5>
          <h6>Mi nombre es Bolo y estaré dandote un Tour por la aplicación</h6>
        </div>
      );
    },
  },
  // ...
];
