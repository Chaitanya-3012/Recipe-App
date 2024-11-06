import { useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import TitleNav from "./Components/TitleNav";
import Dispatcher from "./Components/Dispatcher";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import Details from "./Components/Details";
function App() {
  const [recipe, setRecipe] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <>
      <TitleNav />
      <Search recipe={recipe} setRecipe={setRecipe} />
      <Container>
        <InnerContainer>
          <Dispatcher recipe={recipe} foodId={foodId} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <Details foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
