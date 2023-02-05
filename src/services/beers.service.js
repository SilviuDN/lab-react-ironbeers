import axios from "axios";

class BeersService{
    constructor(){
        this.app = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        })
    }

    getBeers = () => this.app.get('/')
    getOneBeer = (beerId) => this.app.get(`/${beerId}`)
    getRandomBeer = () => this.app.get('/random')
    postNewBeer = (beerInfo) => this.app.post('/new', beerInfo)
    searchBeers = () => this.app.get('/')
    filterBeers = (query) => this.app.get(`/search?q=${query}`)
}

export default BeersService