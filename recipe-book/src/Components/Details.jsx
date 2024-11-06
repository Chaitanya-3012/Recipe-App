import { useEffect, useState } from "react";
import styles from "./Details.module.css";
import FoodIcon from "@mui/icons-material/Circle";
import { pink, green } from "@mui/material/colors";
import Container from "./Container";
import Timer from "@mui/icons-material/AlarmOn";
import axios from "axios";

export default function Details({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [details, setDetails] = useState([]);
  const [items, setItems] = useState([]);
  const [veg, setVeg] = useState(true);
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Sending Request");
        const response = await axios.get(URL, {
          params: {
            apiKey: apiKey,
          },
        });

        const data = response.data;
        console.log("Received Response");

        setDetails(data.analyzedInstructions[0].steps);
        setVeg(data.vegetarian);
        setTime(data.readyInMinutes);
        setTitle(data.title);
        setItems(data.extendedIngredients);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [foodId]);

  return (
    <div className={styles.recipe}>
      <h1 className={styles.title}>{title}</h1>
      <Container>
        <div className={styles.timeIcon}>
          <Timer />
          <h3>Time to Cook : {time} Minutes</h3>
        </div>
        <div className={styles.iconContainer}>
          {veg ? <h3>VEG</h3> : <h3>NON-VEG</h3>}
          {veg ? (
            <FoodIcon sx={{ color: green[500], fontSize: 40 }} />
          ) : (
            <FoodIcon sx={{ color: pink[500], fontSize: 40 }} />
          )}
        </div>
      </Container>
      <h3>Recipe Ingredients : </h3>
      <ul>
        {items.map((item) => {
          return <li key={item.id} className={styles.list}>{item.original}</li>;
        })}
      </ul>
      <h3>Recipe Instructions : </h3>
      <ol>
        {details.map((move) => {
          return <li key={move.number}>{move.step}</li>;
        })}
      </ol>
    </div>
  );
}
