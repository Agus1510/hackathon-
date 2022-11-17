import React from "react";
import style from "./votes.module.css";

function Votes() {
  const array = [
    {
      horario: "11:30",
      equipos: {
        uno: {
          nombre: "Argentina",
          bandera:
            "https://upload.wikimedia.org/wikipedia/commons/0/02/AR-Argentina-Flag-icon.png",
        },
        dos: {
          nombre: "Brasil",
          bandera: "https://cdn-icons-png.flaticon.com/512/2917/2917145.png",
        },
      },
      estadio: "hola",
      goalsTeamA: 5,
      goalsTeamB: 3,
    },
    {
      horario: "13:30",
      equipos: {
        uno: {
          nombre: "Alemania",
          bandera: "https://cdn-icons-png.flaticon.com/512/330/330523.png",
        },
        dos: {
          nombre: "Brasil",
          bandera: "https://cdn-icons-png.flaticon.com/512/2917/2917145.png",
        },
      },
      estadio: "prueba",
      goalsTeamA: 5,
      goalsTeamB: 3,
    },
    {
      horario: "18:30",
      equipos: {
        uno: {
          nombre: "Argentina",
          bandera:
            "https://upload.wikimedia.org/wikipedia/commons/0/02/AR-Argentina-Flag-icon.png",
        },
        dos: {
          nombre: "Alemania",
          bandera: "https://cdn-icons-png.flaticon.com/512/330/330523.png",
        },
      },
      estadio: "hola",
      goalsTeamA: 6,
      goalsTeamB: 2,
    },
  ];

  const arrayPaises = [
    {
      nombre: "Argentina",
      bandera:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/AR-Argentina-Flag-icon.png",
    },
    {
      nombre: "Brasil",
      bandera: "https://cdn-icons-png.flaticon.com/512/2917/2917145.png",
    },
    {
      nombre: "Alemania",
      bandera: "https://cdn-icons-png.flaticon.com/512/330/330523.png",
    },
  ];

  const arrayTeams = [
    {
      nombre: "Brasil",
      grupo: "A",
      wins: 0,
      loses: 1,
      draws: 1,
      points: 1,
    },
    {
      nombre: "Argentina",
      grupo: "A",
      wins: 2,
      loses: 0,
      draws: 1,
      points: 7,
    },
    {
      nombre: "Alemania",
      grupo: "A",
      wins: 1,
      loses: 1,
      draws: 1,
      points: 4,
    },
  ];

  const teamPoints = arrayTeams.sort(function (a, b) {
    return b.points - a.points;
  });

  console.log(teamPoints);

  return (
    <div className={style.container}>
      <div className={style.tables}>
        <table className={style.flexContainer}>
          <tr className={style.titles}>
            <th>Horario</th>
            <th>Equipos</th>
            <th>Estadio</th>
          </tr>
          {array
            ? array.map((p) => {
                return (
                  <tr className={style.matchs}>
                    <td>{p.horario}</td>
                    <td className={style.teams}>
                      <img src={p.equipos.uno.bandera} alt="bandera" />
                      {p.equipos.uno.nombre}
                      <input type="number" placeholder={p.goalsTeamA}></input>
                      <span>-</span>{" "}
                      <input type="number" placeholder={p.goalsTeamB}></input>
                      {p.equipos.dos.nombre}
                      <img src={p.equipos.dos.bandera} alt="bandera" />
                    </td>
                    <td className={style.teams}>{p.estadio}</td>
                  </tr>
                );
              })
            : null}
        </table>
        <table className={style.position}>
          <tr className={style.titles2}>
            <th>Posiciones</th>
          </tr>
          <tr className={style.titles3}>
            <th className={style.teams}>Country</th>
            <th className={style.teams}>Points</th>
            <th className={style.teams}>Wins</th>
            <th className={style.teams}>Loses</th>
            <th className={style.teams}>Draws</th>
          </tr>
          {teamPoints
            ? teamPoints.map((p) => {
                return (
                  <tr className={style.matchs1}>
                    <td className={style.teams}>{p.nombre}</td>
                    <td className={style.teams}>{p.points}</td>
                    <td className={style.teams}>{p.wins}</td>
                    <td className={style.teams}>{p.loses}</td>
                    <td className={style.teams}>{p.draws}</td>
                  </tr>
                );
              })
            : null}
        </table>
      </div>
      <div className={style.selecciones}>
        <h1>SELECCIONES</h1>
        <div className={style.paises}></div>
      </div>
    </div>
  );
}

export default Votes;
