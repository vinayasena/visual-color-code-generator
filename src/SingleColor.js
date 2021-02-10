import React, { useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  return (
    <article
      className={`color ${index > 8 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}

    >
      <p className="percent-value">{weight} %</p>
      <p className="color-value">{hex} <button onClick={()=>{
          setAlert(true);
          navigator.clipboard.writeText(hex)
          setTimeout(()=>{ setAlert(false)}, 2000)
      }}>Copy</button></p>
      {
        alert && <p className='alert'>copied to clipboard</p>
      }
    
    </article>
  );
};

export default SingleColor;
