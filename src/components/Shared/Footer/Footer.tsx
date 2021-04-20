import { Divider } from "@material-ui/core";
import "./styles.scss";

const Footer = () => {
  function redirectToNewsletter() {
    window.location.href = "https://www.liverpool.com.mx/tienda/paginas/Boletin/boletin/";
  }

  return (
    <footer>
      <div className="footer">
        <div className="button-newsletter">
          <button color="primary" className="secondary" onClick={redirectToNewsletter}>
            Subscríbete a Nuestro Newsletter
          </button>
        </div>
        <Divider />
        <div className="phone-contact">
          <p>Ventas por teléfono 555262-9999</p>
          <p>Desde tu celular *7171</p>
        </div>
        <Divider />
        <div className="copyright">
          <p>Copyright | The Marauders </p>
          <p>Hack MX | 2021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
