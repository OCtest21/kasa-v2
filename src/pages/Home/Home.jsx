import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import data from "../../datas/logements.json";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="cards-container">
        {data.map((appart, id) => (
          <div className="card_logement" key={id}>
            <Link className="link_card_logement" to={`/logement/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
