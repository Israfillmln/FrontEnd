import band from "./band.jpeg"

const Home = () => {
    return (
    <div className="jumbotron">
        <img src={band} alt="our band tampil in LA, Lenteng Agung" />
        <div className="band-caption">
        <h3>Lenteng Agung</h3>
        <p>Band kami bukan kaleng-kaleng</p>
        </div>
    </div>
    )
}

export default Home;