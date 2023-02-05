import { Switch, Route } from "react-router-dom";
import BeersPage from './../pages/BeersPage';
import NewBeer from './../pages/NewBeer';
import RandomBeer from './../pages/RandomBeer';
import SingleBeer from './../pages/SingleBeer';
import Navigation from './../pages/Navigation';
import BeerDetails from './../pages/BeerDetails';

const Routes = () => {
    return(
        <Switch>
            <Route path="/beers/random-beer" render={() => <RandomBeer/>}/>
            <Route path="/beers/new-beer" render={() => <NewBeer/>}/>
            <Route path="/beers/:_id" render={(props) => <BeerDetails {...props}/>}/>
            <Route path="/beers" render={() => <BeersPage/>}/>
            <Route path="/" render={() => <Navigation/>}/>
        </Switch>  
    )
}

export default Routes