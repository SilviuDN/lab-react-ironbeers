import { Container } from "react-bootstrap"
import HomeLink from './HomeLink';
import BeersList from "./BeersList";

const BeersPage = () => {
    return(
        <Container style={{ width: '60%', textAlign: 'center', margin: '2em auto' }}>            
            <HomeLink/>
            <BeersList/>
        </Container>
    )
}

export default BeersPage