import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Component } from "react";
import HomeLink from "./HomeLink";
import { Container } from "react-bootstrap";
import BeersService from "../../services/beers.service";

class BeerDetails extends Component{
    constructor(){
        super()
        this.state = {
            beer: undefined
        }
        this.beersService = new BeersService() 
    }

    componentDidMount(){
        const {_id} = this.props.match.params
        console.log(`The id is ${_id}`)
        this.beersService
            .getOneBeer(_id)
            // .then( beer => console.log(beer.data))
            .then( beer => this.setState({beer: beer.data}))
            .catch( err => console.log(`Fetching the beer with id ${_id} returned an error: ${err}.`))
    }

    render(){

        return(
            !this.state.beer
            ?
            <h2>Fetching the details...</h2>
            :
            <Container style={{ width: '60%', textAlign: 'center', margin: '2em auto' }}>            
                <HomeLink/>
                <Card style={{textAlign:'center'}}>
                    <Card.Img variant="top" src={this.state.beer.image_url} style={{ maxWidth: '40%', objectFit: 'cover', margin: '2em auto' }} />
                    <Card.Body>
                        <Card.Title>{this.state.beer.name}</Card.Title>
                        <Card.Text>{this.state.beer.tagline}</Card.Text>
                        <Card.Text>{this.state.beer.description}</Card.Text>
                    </Card.Body> 
                    <Link to={`/beers`}>
                        <Button variant="primary">Back to the list</Button>
                    </Link>
                </Card>
            </Container>         
        )
    }
}

// const BeerDetails = (el) => {
//     const {name, image_url, tagline, description, contributed_by} = el
//     return(
//         <>
//             <Card style={{textAlign:'center'}}>
//             <Card.Img variant="top" src={image_url} style={{ maxWidth: '5em', height: '15em', objectFit: 'cover'}} />
//             <Card.Body>
//                 <Card.Title>{name}</Card.Title>
//                 <Card.Text>{tagline}</Card.Text>
//             </Card.Body> 
//             <Link to='/beers/new-beer'>
//                 <Button variant="primary">Details</Button>
//             </Link>
//             </Card>
//         </>
//     )
// }

export default BeerDetails