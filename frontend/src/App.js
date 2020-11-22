import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import axios from "axios";

const Experience = ({ info }) => {
  return (
    <div className="mx-10 mt-4">
      <div className="text-blue-400 text-lg ">{info.title}</div>
      <div className="text-gray-600 text-xs ">{info.details}</div>
      <div className="whitespace-pre-wrap text-sm ">{info.mission}</div>
    </div>
  );
};
const Competence = ({ competence }) => {
  return (
    <div className="flex items-baseline mx-10 mt-4">
      <div className="w-5/12">{competence.title}</div>
      <div className="w-5/12 h-2 bg-gray-200 rounded-lg">
        <div
          className="h-2 bg-green-300 rounded-lg"
          style={{
            width: `${competence.score}%`
          }}
        ></div>
      </div>
    </div>
  );
};
const Formation = ({ info }) => {
  return (
    <div className="mx-10 mt-4">
      <div className="text-blue-400 text-lg">{info.title}</div>
      <div className="text-gray-600 text-xs">{info.years}</div>
      <div>{info.mention}</div>
    </div>
  );
};
const request = (localResource, setState) => {
  return axios
    .get(`http://localhost:3005/${localResource}`, {
      headers: {
        Authorization: "plopplop"
      }
    })
    .then(response => {
      setState(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};
export default () => {
  const [competences, setCompetences] = useState([]);
  const [formations, setFormations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [formationsAreShown, setFormationsAreShown] = useState(true);

  useEffect(() => {
    request("skills", setCompetences);
    request("formation", setFormations);
    request("experiences", setExperiences);
  }, []);

  return (
    <div className="flex flex-col">
      <SideBar />
      <div className="">
        <div className="font-bold text-2xl mx-10 pt-10">Expériences</div>
        {experiences.map(detail => {
          return <Experience key={detail.title} info={detail} />;
        })}
        <div>
          <div className="flex justify-center flex-col items-center">
            <div className="font-bold text-2xl mx-10 pt-10">Compétences</div>
            <hr className="flex items-center w-1/2 h-px mx-10 mt-3 bg-black" />
          </div>
          {competences.map(competence => {
            return (
              <Competence key={competence.title} competence={competence} />
            );
          })}
        </div>
        <div
          className="font-bold text-2xl mx-10 pt-10"
          onClick={() => {
            setFormationsAreShown(!formationsAreShown);
          }}
        >
          Formations
        </div>
        {formationsAreShown &&
          formations.map(formation => {
            return <Formation key={formation.title} info={formation} />;
          })}
      </div>
    </div>
  );
};
