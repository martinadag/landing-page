import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Giochi Indie. Tutti i diritti riservati.</p>
      <div className="footer-links">
        <a
          href="https://www.garanteprivacy.it/faq/cookie"
          target="_blank">
          Informativa sui cookie
        </a>
        <a
          href="https://www.garanteprivacy.it/faq/cookie"
          target="_blank">
          Privacy Policy
        </a>
        <a
          href="https://www.iubenda.com/it/help/1757-termini-e-condizioni-a-cosa-servono"
          target="_blank">
          Termini e condizioni
        </a>
      </div>
    </footer>
  );
}

export default Footer;