import styles from "./RecipeCard.module.css";
import { Button } from "@mui/material";

export default function RecipeCard({
  foodTitle,
  foodImage,
  setFoodId,
  foodId,
}) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={foodImage} alt={foodTitle} />
      <h3 className={styles.title}>{foodTitle}</h3>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setFoodId(foodId);
        }}
      >
        See Recipe
      </Button>
    </div>
  );
}
