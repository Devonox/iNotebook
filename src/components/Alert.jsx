import React from "react";

export default function Alerts(props) {

  const capitilizeFirstLetter = (string) => {
    if(string==="danger"){
      string = "error"
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="mb-4" style={{height:'50px'}}>
    {props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {capitilizeFirstLetter(props.alert.type)}:{props.alert.message}
        </div>
      </div>
    )}
    </div>
  );
}
