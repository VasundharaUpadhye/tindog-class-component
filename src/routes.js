import { Route, BrowserRouter, Switch } from "react-router-dom";
import ByBreed from "./Components/ByBreed";
import Home from "./Components/Home";
import NoMatch from "./Components/NoMatch";
import RandomDog from "./Components/RandomDog";
import NavBar from "./Components/NavBar";
import BreedList from "./Components/BreedList";
import AllBreeds from "./Components/AllBreeds";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/allbreeds" component={AllBreeds}></Route>
        <Route exact path="/breedlist" component={BreedList}></Route>
        <Route exact path="/randomdog" component={RandomDog}></Route>
        <Route exact path="/bybreed" component={ByBreed}></Route>
        <Route path="*" component={NoMatch}></Route>
      </Switch>
    </BrowserRouter>
  );
};
