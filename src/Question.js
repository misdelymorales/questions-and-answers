import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <article className="article-question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    </>
  );
};

export default Question;
