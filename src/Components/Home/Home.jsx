import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="containerHome">
      <h1 className="hh1">MemoryMingle</h1>
      <div className="btnWrap">
        <a href="/spooky">
          {" "}
          <button className="btnh1">START GAME</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
