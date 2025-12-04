import "../styles/news.css";

const newsData = [  // dati delle notizie per ogni piattaforma
  {
    platform: "PlayStation™",
    colorClass: "playstation",
    logo: "https://img.icons8.com/ios11/512/FFFFFF/play-station.png",
    items: [
      { text: "Elden Ring: Nightreign – DLC “The Forsaken Hollows”", link: "https://multiplayer.it/notizie/dlc-the-forsaken-hollows-elden-ring-nightreign-difficile-game-director-risponde.html" },
      { text: "RDR torna su PS5 e console moderne", link: "https://www.adnkronos.com/tecnologia/red-dead-redemption-torna-su-console-e-smartphone_2I6tYQQTq48ZcEfkQlxwlf" },
      { text: "Marvel Cosmic Invasion", link: "https://store.playstation.com/it-it/concept/10012545" },
    ],
  },

  {
    platform: "Xbox™",
    colorClass: "xbox",
    logo: "https://img.icons8.com/ios11/512/FFFFFF/xbox.png",
    items: [
      { text: "Final Fantasy XVI ora su Xbox", link: "https://www.mondoxbox.com/news/72402/final-fantasy-xvi-arriva-finalmente-su-xbox-ff-vii-remake-intergrade-dal-prossimo-inverno.html?" },
      { text: "Elden Ring: Nightreign – spin-off 2025 disponibile per Xbox", link: "https://es.wikipedia.org/wiki/Elden_Ring_Nightreign?" },
      { text: "Arrivi su Xbox Game Pass a dicembre", link: "https://www.everyeye.it/notizie/xbox-game-pass-mortal-kombat-1-routine-guidano-elenco-giochi-dicembre-845731.html?" },
    ],
  },

  {
    platform: "Nintendo™",
    colorClass: "nintendo",
    logo: "https://img.icons8.com/ios11/512/FFFFFF/nintendo-switch-logo.png",
    items: [
      { text: "Mario Kart World – aggiornamento", link: "https://www.gamesradar.com/games/super-mario/mario-kart-world-update-makes-playing-with-friends-easier-one-intermission-track-less-pathetic-and-finally-allows-you-to-turn-that-soundtrack-up-to-the-only-option-you-need-loud/" },
      { text: "NieR: Automata ora retrocompatibile su Switch 2", link: "https://www.spaziogames.it/notizie/nier-automata-compatibile-con-nintendo-switch-2-2025-12-01?" },
      { text: "Aggiornamenti dal Nintendo Direct", link: "https://www.everyeye.it/notizie/nintendo-direct-12-settembre-principali-annunci-switch-switch-2-827393.html" },
    ],
  },

  {
    platform: "PC™",
    colorClass: "pc",
    logo: "https://img.icons8.com/ios11/512/FFFFFF/windows8.png",
    items: [
      { text: "Baldur's Gate 3 – nuova espansione in arrivo", link: "https://www.tomshw.it/videogioco/baldurs-gate-3-enorme-update-in-arrivo-nel-2025-ecco-tutte-le-novita-2024-11-29" },
      { text: "Half-Life 3 rumor: nuove informazioni", link: "https://www.memorypc.it/blog/gaming-news/half-life-3-nuove-indiscrezioni-danno-nuova-vita-alle-vecchie-voci/" },
      { text: "Steam Winter Sale – ecco le offerte migliori", link: "https://www.uagna.it/videogiochi/le-migliori-offerte-dei-saldi-invernali-di-steam-187841" },
    ],
  },
];

export default function News() {  // componente principale delle notizie
  return (
    <section className="news-section">
      <div className="news-cards">
        {newsData.map((card, index) => (  // mappa attraverso i dati delle notizie per creare le card
          <div key={index} className={`news-card ${card.colorClass}`}>  {/* aggiungi classe di colore specifica */}
            <div className="card-header">
              <h3>{card.platform}</h3>
            </div>

            <ul className="card-list">  {/* lista delle notizie */}
              {card.items.map((item, idx) => (  // mappa attraverso gli elementi delle notizie
                <li key={idx} className="news-item">
                  <div className="bullet">  {/* cerchio colorato */}
                    <img src={card.logo} alt={`${card.platform} logo`} />
                  </div>

                  <a
                    href={item.link}  // link alla notizia
                    className="news-link"
                    target="_blank" // apri in una nuova scheda
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}