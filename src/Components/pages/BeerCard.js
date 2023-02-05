import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BeerCard = (el) => {
    const {_id, name, image_url, tagline, description, contributed_by} = el
    return(
        <>
            <Card style={{textAlign:'center'}}>
            <Card.Img variant="top" src={image_url} style={{ maxWidth: '5em', height: '15em', objectFit: 'cover', margin: '1em auto' }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{tagline}</Card.Text>
            </Card.Body> 
            <Link to={`/beers/${_id}`}>
                <Button variant="primary">Details</Button>
            </Link>
            </Card>
        </>
    )
}

export default BeerCard