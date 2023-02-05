import HomeLink from './HomeLink';
import { Container } from "react-bootstrap"
import { Form, Button } from 'react-bootstrap';
import { Component } from 'react';
import BeersService from '../../services/beers.service';

class NewBeer extends Component{
    constructor(){
        super()
        this.state = {
            beer:{
                name: '',
                tagline: '',
                description: '' ,
                first_brewed: '' ,
                brewers_tips: '' ,
                attenuation_level: '',
                contributed_by: '' 
            }
        }
        this.beersService = new BeersService()
    }

    handleInputChange(e){
        const {name, value} = e.target
        this.setState({
            beer: { ...this.state.beer, [name]: value}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.beer)
        this.beersService
            .postNewBeer( this.state.beer )
            .then( () => {
                this.resetInputFields()
                // this.setState({
                //     beer:{
                //         name: '',
                //         tagline: '',
                //         description: '' ,
                //         first_brewed: '' ,
                //         brewers_tips: '' ,
                //         attenuation_level: '',
                //         contributed_by: '' 
                //     }
                // })
            })
            .catch( err => console.log(`Creating a beer returned an error: ${err}.`))
    }

    resetInputFields(){
        this.setState({
            beer:{
                name: '',
                tagline: '',
                description: '' ,
                first_brewed: '' ,
                brewers_tips: '' ,
                attenuation_level: '',
                contributed_by: '' 
            }
        })
    }

    render(){
        return(
            <Container style={{ width: '60%', textAlign: 'center', margin: '2em auto' }}>            
                <HomeLink/>
                <Form onSubmit={e => this.handleSubmit(e)}>
    
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="name" value={this.state.beer.name} name="name" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formTagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" placeholder="tagline" value={this.state.beer.tagline} name="tagline" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="description" value={this.state.beer.description} name="description" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formFirst_brewed">
                        <Form.Label>First brewed</Form.Label>
                        <Form.Control type="text" placeholder="first_brewed" value={this.state.beer.first_brewed} name="first_brewed" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBrewers_tips">
                        <Form.Label>Brewers tips</Form.Label>
                        <Form.Control type="text" placeholder="brewers_tips" value={this.state.beer.brewers_tips} name="brewers_tips" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formAttenuation_level">
                        <Form.Label>Attenuation level</Form.Label>
                        <Form.Control type="number" placeholder="attenuation_level" value={this.state.beer.attenuation_level} name="attenuation_level" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formContributed_by">
                        <Form.Label>Contributed by</Form.Label>
                        <Form.Control type="text" placeholder="contributed_by" value={this.state.beer.contributed_by} name="contributed_by" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}


export default NewBeer