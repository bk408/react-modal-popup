import { useState } from "react";
import JS from "../assets/js.jpeg";

const ModalComp = () => {
  const [data, setData] = useState(false);

  const handleClick = () => {
    setData(!data);
  };

  const handleClose = () => {
    setData(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "data-container") {
      setData(false);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <button
          style={{
            cursor: "pointer",
            padding: "10px 12px",
            border: "none",
            borderRadius: "10px",
          }}
          onClick={handleClick}
        >
          click me!
        </button>
      </div>
      {data && (
        <div
          className="data-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "royalblue",
            border: "2px solid black",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
          }}
          onClick={handleOutsideClick}
        >
          <div className="data-box" style={{ background: "#fff" }}>
            <img src={JS} alt="JS" />
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "greenyellow",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
              }}
              onClick={handleClose}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComp;
