import RecipeCard from "./RecipeCard";

export default function Dispatcher({ recipe, foodId, setFoodId }) {
  return (
    <div>
      {recipe.map((food) => (
        <RecipeCard
          key={food.id}
          foodTitle={food.title}
          foodImage={food.image}
          setFoodId={setFoodId}
          foodId={food.id.toString()}
        />
      ))}
    </div>
  );
}
