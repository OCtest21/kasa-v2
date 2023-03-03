import { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import Nav from "../../components/Nav/Nav";
import data from "../../datas/logements.json";

export default function Home() {
  console.log(data);
  return (
    <div>
      <Nav />
      <h1>Accueil</h1>
      <div className="cards-container">
        {data.map((appart) => (
          <Card
            key={appart.id}
            id={appart.id}
            cover={appart.cover}
            title={appart.title}
          />
        ))}
      </div>
    </div>
  );
}
