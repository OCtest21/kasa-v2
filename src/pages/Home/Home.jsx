import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import Nav from "../../components/Nav/Nav";
import data from "../../datas/logements.json";

export default function Home() {
  console.log(data);
  return (
    <div>
      <Banner />
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
