import HomeLink from './HomeLink';
import { Container } from "react-bootstrap"


const SingleBeer = () => {
    return(
        <Container style={{ width: '60%', textAlign: 'center', margin: '2em auto' }}>            
            <HomeLink/>
            <div>Single Beer</div>
        </Container>
    )
}

export default SingleBeer