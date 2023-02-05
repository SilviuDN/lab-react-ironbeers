import HomeLink from './HomeLink';
import { Component } from "react";
import BeersService from "../../services/beers.service";
import BeerCard from "./BeerCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBeer from "./SearchBeer";

class RandomBeer extends Component{
    constructor(){
        super()
        this.state = {
            beer: undefined
        }
        this.beersService = new BeersService()
    }

    // WHEN THE SERVICE IS MISSING:
    // componentDidMount = () => {
    //     this.beersService
    //         .getBeers()
    //         .then( beers => {
    //             const randomIndex = this.randomNumber(beers.data.length)
    //             // console.log(randomIndex)
    //             this.setState({beer:beers.data[randomIndex]})
    //         })
    //         .catch( err => console.log(`Fetching all beers returned an error: ${err}.`))
    // }

    // randomNumber(n){
    //     return Math.floor(Math.random() * n)
    // }
    // WHEN THE SERVICE IS MISSING:

    componentDidMount = () => {
        this.beersService
            .getRandomBeer()
            .then( beer => {
                this.setState({beer: beer.data})
            })
            .catch( err => console.log(`Fetching all beers returned an error: ${err}.`))
    }

    render(){
        return (
            this.state.beer === undefined
            ?
            <h2>Fetching a random beer...</h2>
            :
            <Container>
                <HomeLink/>
                <BeerCard {...this.state.beer}/>                          
            </Container>        
            )
    }
}

export default RandomBeer
