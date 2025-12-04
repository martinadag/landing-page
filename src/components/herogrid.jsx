import "../styles/herogrid.css";

function HeroGrid() {
    return (
        <section className="hero-grid">
            <div className="hero-grid-row top">
                <div className="hero-grid-item">
                    <img src="https://www.popspace.it/wp-content/uploads/2021/01/copertina-articolo-20.jpg" alt="Undertale" />
                     <div className="hero-grid-text">
                        <h2>Undertale</h2>
                         <p>Undertale è un gioco di ruolo nel quale il giocatore veste i panni di un bambino con cui deve esplorare un mondo sotterraneo in cerca di una via d'uscita, percorrendo le mappe tutte diverse tra loro.</p>
                     </div>
                 </div>
             </div>

            <div className="hero-grid-row bottom">
                 <div className="hero-grid-item">
                    <img src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_download_software_5/H2x1_WiiUDS_HollowKnight_image1600w.jpg" alt="Hollow Knight" />
                        <div className="hero-grid-text">
                            <h2>Hollow Knight</h2>
                            <p>Hollow Knight è un videogioco di genere metroidvania ambientato in un vasto regno sotterraneo, infestato da creature corrotte.</p>
                        </div>
                </div>
                <div className="hero-grid-item">
                    <img src="https://upload.wikimedia.org/wikipedia/it/9/90/Terraria_%28videogioco%29.jpg" alt="Terraria" />
                        <div className="hero-grid-text">
                            <h2>Terraria</h2>
                            <p>Terraria è un videogioco di azione e avventura in 2D con elementi di costruzione e sopravvivenza, ambientato in un mondo generato proceduralmente.</p>
                        </div>
                </div>
            </div>
        </section>
    );
}
export default HeroGrid;