import React from "react";
import facts from "../api/data.json";

const About = () => {
  return (
    <div className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts <br /> we're proud of
      </h2>

      <div className="gradient-cards">
        {facts.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          console.log(interestingFact);

          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Intresting Fact:</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
