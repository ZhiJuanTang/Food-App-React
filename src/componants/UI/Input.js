import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label} </label>
      <input ref={ref} {...props.input} />
      {/* {...props.input} means extract all key value pairs in this input object which we recieved on props input  are added as props to 
        input . e.g. id={props.input.id}, type={ props.input.type}...   */}
    </div>
  );
});

export default Input;
