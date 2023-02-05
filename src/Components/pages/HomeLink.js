import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import homeImage from '../../assets/home.PNG'

const HomeLink = () => {
    return(
        <Link to='/'>
            <Card style={{ width: '100%', objectFit: 'cover' }}>
                <Card.Img variant="top" src={homeImage}/>
            </Card>
        </Link>
    )
}

export default HomeLink