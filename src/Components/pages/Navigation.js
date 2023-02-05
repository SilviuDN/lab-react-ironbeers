import {Link} from 'react-router-dom'
import LinkCard from './LinkCard'
import allBeers from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'

const Navigation = () => {
    return(
        <>
        <Link to="/beers"><LinkCard name="All beers" image={allBeers}/></Link>
        <Link to="/beers/random-beer"><LinkCard name="Random beer" image={randomBeer}/></Link>
        <Link to="/beers/new-beer"><LinkCard name="New beer" image={newBeer}/></Link>
        </>
    )
 }

 export default Navigation