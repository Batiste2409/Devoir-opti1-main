import freshFood from "../assets/img/fresh-food.jpg";
import restaurant from "../assets/img/restaurant-japonais.jpg";
import bienEtre from "../assets/img/espace-bien-etre.jpg";
import coder from "../assets/img/coder.jpg";

function Home() {
  return (
    <div>

      {/* Texte d'accueil */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">
          Bienvenue sur ce site
        </h1>

        <p className="text-lg text-gray-600">
          Développé par Batiste, éleve CEF
        </p>
      </section>

      {/* Galerie */}
      <div className="gallery">

        {/* CARD 1 */}
        <div className="card">

          <img
            src={freshFood}
            alt="Fresh Food"
            className="gallery-img"
          />

          <div className="card-body">
            <h2>Fresh Food</h2>

            <p>
              Site de vente de produits frais en ligne
            </p>

            <button>Voir le site</button>
          </div>

          <div className="card-footer">
            Site réalisé avec PHP et MySQL
          </div>

        </div>

        {/* CARD 2 */}
        <div className="card">

          <img
            src={restaurant}
            alt="Restaurant japonais"
            className="gallery-img"
          />

          <div className="card-body">
            <h2>Restaurant Akira</h2>

            <p>
              Site de cuisine japonaise moderne
            </p>

            <button>Voir le site</button>
          </div>

          <div className="card-footer">
            Site réalisé avec WordPress
          </div>

        </div>

        {/* CARD 3 */}
        <div className="card">

          <img
            src={bienEtre}
            alt="Espace bien-être"
            className="gallery-img"
          />

          <div className="card-body">
            <h2>Espace bien-être</h2>

            <p>
              Institut de relaxation et de soins
            </p>

            <button>Voir le site</button>
          </div>

          <div className="card-footer">
            Site réalisé avec Laravel
          </div>

        </div>

        {/* CARD 4 */}
        <div className="card">

          <img
            src={coder}
            alt="Projet développeur"
            className="gallery-img"
          />

          <div className="card-body">
            <h2>Portfolio Développeur</h2>

            <p>
              Création de sites web modernes et responsives
            </p>

            <button>Voir le site</button>
          </div>

          <div className="card-footer">
            Site réalisé avec React
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;