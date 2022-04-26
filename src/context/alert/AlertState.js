import { createContext,React,useState} from "react";

const alertContext= createContext();

const AlertState = (props) => {
    const [alert, setalert] = useState("");
    const handleAlert = (message, type) => 
    {
        setalert({
          message: message,
          type: type,
        });
        setTimeout(() => {
          setalert(null);
        }, 1000);
    };

  return (
    <div>
        <alertContext.Provider value={{alert,handleAlert,setalert}}>
            {props.children}
        </alertContext.Provider>
    </div>
  )
}

export default AlertState