import React from "react";

const InputItem = ({ InputSearch }) => {
  return (
    <form>
      <input
        onChange={InputSearch}
        type="search"
        placeholder="Ne Arıyorsunuz ??"
        style={{
          width: "250px",
          textAlign: "center",
          outline: "none",
          borderRadius: "10px",
          border: "2px solid lightgray",
        }}
      />
    </form>
  );
};

export default InputItem;
