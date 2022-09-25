import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  /* warrenpoint */
  const [warrenpoint, setWarrenpoint] = useState({
    wind: 0,
    currentTide: 0,
  });

  /* fetching data at the start of the application */

  useEffect(() => {
    fetch(
      "https://easytide.admiralty.co.uk/Home/GetPredictionData?stationId=0441",
      {
        method: "GET",
        headers: {
          "Content-Type" : "application/json",
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []); /*  */
  return (
    <div>
      <Head>
        <title>OceanLorry</title>
        <meta name="description" content="Some fancy weather data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>Welcome to OceanLorry 🌊🚚</div>
        <div className={styles.title}>Warrenpoint</div>
        <div className={styles.text}>Wind {}</div>
      </div>
    </div>
  );
}
