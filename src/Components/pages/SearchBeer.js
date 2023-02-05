import { Component } from "react";
import { Container, Form } from "react-bootstrap";

class SearchBeer extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchString: ''
        }
    }

    handleInputChange = e => {
        // console.log(e.target.value)
        this.setState({
            searchString: e.target.value
        })
        // this.props.searchBeer(this.state.searchString)
    }

    // due to the asynchronous behaviour of setState it's necessary to wait for it and then lift the state up to the parent component
    componentDidUpdate(prevProps, prevState){
        if( this.state.searchString !== prevState.searchString ){
            this.props.searchBeer(this.state.searchString)
        }
    }




    render(){

        return(
            <Container style={{ width: '60%', textAlign: 'center', margin: '2em auto' }}>            
                {/* <Form onSubmit={e => this.handleSubmit(e)}>             */}
                <Form>
    
                    <Form.Group className="mb-3" controlId="formSearchString">
                        <Form.Label>Search for beers</Form.Label>
                        <Form.Control type="text" placeholder="beer name..." value={this.state.searchString} name="searchString" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>    

                </Form>
            </Container>

        )
    }
}

export default SearchBeer