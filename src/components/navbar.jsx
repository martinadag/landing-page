import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-left">
        <img src="https://eu.aimcontrollers.com/wp-content/uploads/2024/01/XBOX_PREDESIGN_PRO_DOUBLE__CHERRY-1.png" alt="Xbox" className="navbar-logo"/>
        <h1 className="navbar-title">GIOCHI INDIE</h1>
    </div>

    <div className="navbar-links">
        <a href="https://undertale.wiki/" className="navbar-link">UNDERTALE</a>
        <a href="https://hollowknight.fandom.com/wiki/Hollow_Knight_Wiki" className="navbar-link">HOLLOW KNIGHT</a>
        <a href="https://terraria.wiki.gg/" className="navbar-link">TERRARIA</a>
    </div>

</nav>
  );
}
export default Navbar;