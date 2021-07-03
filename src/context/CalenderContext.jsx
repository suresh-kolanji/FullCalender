import React, { createContext, useState, useEffect } from "react";
import moment from "moment";
export const CalenderContext = createContext();

export const CalenderProvider = (props) => {
  const [sDate, setsDate] = useState(new Date());

  const [eDate, seteDate] = useState(new Date());

  

  return (
    <CalenderContext.Provider
      value={[ sDate, setsDate, eDate, seteDate]}
    >
      {props.children}
    </CalenderContext.Provider>
  );
};
