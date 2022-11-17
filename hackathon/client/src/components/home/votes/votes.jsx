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
      votos: { uno: 500, dos: 300 },
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
      votos: { uno: 600, dos: 500 },
    },
  ];
  console.log(array[0].equipos.uno);
  return (
    <div className={style.container}>
      <table className={style.flexContainer}>
        <tr className={style.titles}>
          <th>Horario</th>
          <th>Equipos</th>
          <th>Votos</th>
        </tr>
        {array
          ? array.map((p) => {
              return (
                <tr className={style.matchs}>
                  <td>{p.horario}</td>
                  <td className={style.teams}>
                    <img src={p.equipos.uno.bandera} alt="bandera" />
                    {p.equipos.uno.nombre}
                    <span></span> {p.equipos.dos.nombre}
                    <img src={p.equipos.dos.bandera} alt="bandera" />
                  </td>
                  <td className={style.teams}>
                    <img src={p.equipos.uno.bandera} alt="bandera" />
                    {p.votos.uno}
                    <span></span> {p.votos.dos}
                    <img src={p.equipos.dos.bandera} alt="bandera" />
                  </td>
                </tr>
              );
            })
          : null}
      </table>
    </div>
  );
}

export default Votes;
