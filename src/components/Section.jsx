import React from "react";
import Card from "./Card";
import Ubication from "./Ubication";

function Section() {
  return (
    <section className="w-full">
      <div className="w-11/12 m-auto py-16">
        <Card></Card>
      </div>
      <div className="w-11/12 m-auto pt-16">
        <Ubication></Ubication>
      </div>
    </section>
  );
}

export default Section;
