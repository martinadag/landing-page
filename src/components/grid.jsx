import "../styles/grid.css";

const games = [     // array di giochi
  { id: 1, title: "Undertale", desc: "Undertale è un gioco di ruolo nel quale il giocatore veste i panni di un bambino con cui deve esplorare un mondo sotterraneo in cerca di una via d'uscita, percorrendo le mappe tutte diverse tra loro.", img: "https://www.popspace.it/wp-content/uploads/2021/01/copertina-articolo-20.jpg"},
  { id: 2, title: "Silksong", desc: "Silksong è il sequel di Hollow Knight, che segue le avventure di Hornet in un nuovo regno misterioso.", img: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000020840/60eebc8f7133f685eddbffbe43c8da617ba0a5d699f2008f9c31c6119d1792af"},
  { id: 3, title: "Celeste", desc: "Celeste è un platformer acclamato per la sua storia emotiva e il gameplay impegnativo, incentrato sulla scalata di una montagna.", img: "https://gaming-cdn.com/images/products/8003/orig/celeste-pc-mac-gioco-steam-cover.jpg?v=1705489821"},
  { id: 4, title: "Limbo", desc: "Limbo è un platform puzzle con un'atmosfera oscura e inquietante, incentrato sulla sopravvivenza e la risoluzione di enigmi.", img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Limbo.jpg"},
  { id: 5, title: "Hollow Knight", desc: "Hollow Knight è un videogioco di genere metroidvania ambientato in un vasto regno sotterraneo, infestato da creature corrotte.", img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_download_software_5/H2x1_WiiUDS_HollowKnight_image1600w.jpg"},
  { id: 6, title: "Terraria", desc: "Terraria è un videogioco di azione e avventura in 2D con elementi di costruzione e sopravvivenza, ambientato in un mondo generato proceduralmente.", img: "https://upload.wikimedia.org/wikipedia/it/9/90/Terraria_%28videogioco%29.jpg"},
  { id: 7, title: "To the Moon", desc: "To The Moon è un'avventura narrativa che segue la storia di due medici che cercano di realizzare l'ultimo desiderio di un uomo morente.", img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ToTheMoon_image1600w.jpg"},
];

function Grid() {
  const itemsPerRow = 4; // valore per cambiare quanti giochi per riga

  // array diviso in righe
  const rows = [];
  for (let i = 0; i < games.length; i += itemsPerRow) {
    rows.push(games.slice(i, i + itemsPerRow));
  }

  return (
    <section className="grid">
      {rows.map((row, index) => (
        <div className={`grid-row ${index % 2 === 0 ? "top" : "bottom"}`} key={index}>
          {row.map((game) => (
            <div className="grid-item" key={game.id}>
              <a href={game.link}>
                <img src={game.img} alt={game.title} />
              </a>
              <div className="grid-text">
                <h2>{game.title}</h2>
                <p>{game.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Grid;







/* function Grid() {
    return (
        <section className="grid">
            <div className="grid-row top">
                <div className="grid-item">
                    <img src="https://www.popspace.it/wp-content/uploads/2021/01/copertina-articolo-20.jpg" alt="Undertale" />
                     <div className="grid-text">
                        <h2>Undertale</h2>
                         <p>Undertale è un gioco di ruolo nel quale il giocatore veste i panni di un bambino con cui deve esplorare un mondo sotterraneo in cerca di una via d'uscita, percorrendo le mappe tutte diverse tra loro.</p>
                     </div>
                 </div>
                <div className="grid-item">
                    <img src="https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000020840/60eebc8f7133f685eddbffbe43c8da617ba0a5d699f2008f9c31c6119d1792af" alt="Silksong" />
                     <div className="grid-text">
                        <h2>Silksong</h2>
                         <p>Silksong è il sequel di Hollow Knight, che segue le avventure di Hornet in un nuovo regno misterioso.</p>
                     </div>
                 </div>
                <div className="grid-item">
                    <img src="https://gaming-cdn.com/images/products/8003/orig/celeste-pc-mac-gioco-steam-cover.jpg?v=1705489821" alt="Celeste" />
                     <div className="grid-text">
                        <h2>Celeste</h2>
                         <p>Celeste è un platformer acclamato per la sua storia emotiva e il gameplay impegnativo, incentrato sulla scalata di una montagna.</p>
                     </div>
                 </div>
                <div className="grid-item">
                    <img src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Limbo.jpg" alt="Limbo" />
                     <div className="grid-text">
                        <h2>Limbo</h2>
                         <p>Limbo è un platform puzzle con un'atmosfera oscura e inquietante, incentrato sulla sopravvivenza e la risoluzione di enigmi.</p>
                     </div>
                 </div>               
             </div>

            <div className="grid-row bottom">
                 <div className="grid-item">
                    <img src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_download_software_5/H2x1_WiiUDS_HollowKnight_image1600w.jpg" alt="Hollow Knight" />
                        <div className="grid-text">
                            <h2>Hollow Knight</h2>
                            <p>Hollow Knight è un videogioco di genere metroidvania ambientato in un vasto regno sotterraneo, infestato da creature corrotte.</p>
                        </div>
                </div>
                <div className="grid-item">
                    <img src="https://upload.wikimedia.org/wikipedia/it/9/90/Terraria_%28videogioco%29.jpg" alt="Terraria" />
                        <div className="grid-text">
                            <h2>Terraria</h2>
                            <p>Terraria è un videogioco di azione e avventura in 2D con elementi di costruzione e sopravvivenza, ambientato in un mondo generato proceduralmente.</p>
                        </div>
                </div>
                 <div className="grid-item">
                    <img src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ToTheMoon_image1600w.jpg" alt="To The Moon" />
                        <div className="grid-text">
                            <h2>To The Moon</h2>
                            <p>To The Moon è un'avventura narrativa che segue la storia di due medici che cercano di realizzare l'ultimo desiderio di un uomo morente.</p>
                        </div>
                </div>
            </div>
        </section>
    );
} */