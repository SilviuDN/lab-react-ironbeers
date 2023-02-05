import { Component } from "react";
import BeersService from "../../services/beers.service";
import BeerCard from "./BeerCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBeer from "./SearchBeer";
import SearchBeer2 from "./SearchBeer2";

class BeersList extends Component{
    constructor(){
        super()
        this.state = {
            beers: undefined
        }
        this.beersService = new BeersService()
    }

    searchBeer(searchString){
        this.beersService
            .getBeers()
            .then( beers => {
                const tempBeersList = [...beers.data]
                this.setState({
                    beers: tempBeersList.filter( el => el.name.toLowerCase().includes(searchString.toLowerCase()))
                })
            })
            // .then( beers => console.log(beers))
            .catch( err => console.log(`Fetching all beers returned an error: ${err}.`))
    }

    searchBeer2(searchString){
        this.beersService
            .filterBeers(searchString)
            .then( beers => {
                const tempBeersList = [...beers.data]
                this.setState({
                    beers: tempBeersList.filter( el => el.name.toLowerCase().includes(searchString.toLowerCase()))
                })
            })
            .catch( err => console.log(`Fetching all beers returned an error: ${err}.`))
    }

    componentDidMount = () => {
        this.beersService
            .getBeers()
            .then( beers => this.setState({beers:beers.data}))
            // .then( beers => console.log(beers))
            .catch( err => console.log(`Fetching all beers returned an error: ${err}.`))
    }

    render(){
        return (
            this.state.beers === undefined
            ?
            <h2>Fetching the beers list...</h2>
            :
            <Container>
                <Row style={{verticalAlign: 'center'}}>
                    <Col xs={6}>
                        <Link to={`/beers/new-beer`}>
                            <Button variant="primary" style={{width: '100%', margin: '1em 0'}}>Create Beer</Button>
                        </Link>
                    </Col>
                    <Col xs={6}>
                        <Link to={`/beers/random-beer`}>
                            <Button variant="primary" style={{width: '100%', margin: '1em 0'}}>Random Beer</Button>
                        </Link>
                    </Col>
                </Row>
                    <Row>
                        <Col xs={6}>
                            <SearchBeer searchBeer = { searchString => this.searchBeer(searchString)}/>
                        </Col>
                        <Col xs={6}>
                            <SearchBeer2 searchBeer2 = { searchString => this.searchBeer2(searchString)}/>
                        </Col>                        
                    </Row>


                <Row>
                    {
                        this.state.beers.map( el => 
                            <Col xs={4} key={el._id}>
                                <BeerCard {...el}/>
                            </Col>
                        )
                    }
                </Row>
            </Container>        
            )
    }
}

export default BeersList