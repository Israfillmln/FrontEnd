import "../../assets/asset.css"
import newyork from "./newyork.jpeg"

const TourCard = () => {
    return (
      <section id="tour" className="tour-dates-section">
      <div className="tour-dates-wrapper container py-5">
        <h2>TOUR DATES</h2>
        <em className="text-muted mt-3">Jangan lupa saksikan kami live</em>
        <div className="tour-cards-container mt-3">
          <div className="tour-card">
            <div className="tour-card-image">
              <img src={newyork} alt="" />
            </div>
            <div className="tour-card-content">
              <p className="city mb-3">New York</p>
              <p className="date mb-3">Fri 27 Nov 2016</p>
              <p className="description">Praesent tincidunt sed tellus ut rutrum sed
                vitae justo.
              </p>
              <button>Buy Tickets</button>
            </div>
          </div>
          <div className="tour-card">
            <div className="tour-card-image">
              <img src={newyork} alt="" />
            </div>
            <div className="tour-card-content">
              <p className="city mb-3">New York</p>
              <p className="date mb-3">Fri 27 Nov 2016</p>
              <p className="description">Praesent tincidunt sed tellus ut rutrum sed
                vitae justo.
              </p>
              <button>Buy Tickets</button>
            </div>
          </div>
          <div className="tour-card">
            <div className="tour-card-image">
              <img src={newyork} alt="" />
            </div>
            <div className="tour-card-content">
              <p className="city mb-3">New York</p>
              <p className="date mb-3">Fri 27 Nov 2016</p>
              <p className="description">Praesent tincidunt sed tellus ut rutrum sed
                vitae justo.
              </p>
              <button>Buy Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    )
}

export default TourCard;