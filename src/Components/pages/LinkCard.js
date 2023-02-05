// import { Card } from "react-bootstrap"
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const LinkCard = (props) => {
    const {name, image} = props
    return(
        <Container>
            <Card className='item-card' style={{ width: '60%', textAlign: 'center', margin: '2em auto', textDecoration: 'none' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title style={{ textDecoration: 'none' }}>{name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default LinkCard