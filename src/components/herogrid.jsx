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
                <div className="hero-grid-item">
                    <img src="https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000020840/60eebc8f7133f685eddbffbe43c8da617ba0a5d699f2008f9c31c6119d1792af" alt="Silksong" />
                     <div className="hero-grid-text">
                        <h2>Silksong</h2>
                         <p>Silksong è il sequel di Hollow Knight, che segue le avventure di Hornet in un nuovo regno misterioso.</p>
                     </div>
                 </div>
                <div className="hero-grid-item">
                    <img src="https://gaming-cdn.com/images/products/8003/orig/celeste-pc-mac-gioco-steam-cover.jpg?v=1705489821" alt="Celeste" />
                     <div className="hero-grid-text">
                        <h2>Celeste</h2>
                         <p>Celeste è un platformer acclamato per la sua storia emotiva e il gameplay impegnativo, incentrato sulla scalata di una montagna.</p>
                     </div>
                 </div>
                <div className="hero-grid-item">
                    <img src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Limbo.jpg" alt="Limbo" />
                     <div className="hero-grid-text">
                        <h2>Limbo</h2>
                         <p>Limbo è un platform puzzle con un'atmosfera oscura e inquietante, incentrato sulla sopravvivenza e la risoluzione di enigmi.</p>
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
                 <div className="hero-grid-item">
                    <img src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ToTheMoon_image1600w.jpg" alt="To The Moon" />
                        <div className="hero-grid-text">
                            <h2>To The Moon</h2>
                            <p>To The Moon è un'avventura narrativa che segue la storia di due medici che cercano di realizzare l'ultimo desiderio di un uomo morente.</p>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default HeroGrid;