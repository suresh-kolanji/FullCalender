import React, { createContext, useState, useEffect } from "react";
import moment from "moment";
export const CalenderContext = createContext();

export const CalenderProvider = (props) => {
  const [sDate, setsDate] = useState(new Date());


  
  const [events, setevents] = useState([
    
    
    
  ]);

  return (
    <CalenderContext.Provider value={[events, setevents, sDate, setsDate]}>
      {props.children}
    </CalenderContext.Provider>
  );
};
