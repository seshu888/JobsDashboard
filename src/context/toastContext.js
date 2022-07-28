import React, { useState } from "react";

const ToastContext = React.createContext({
  openToast: false,
});

export const ToastContextProvder = ({ children }) => {
  const [value, setValue] = useState(false);
  const [msg, setMsg] = useState({ text: "", type: "" });

  const handleOpenToast = (msg, type) => {
    setValue(true);
    setMsg({ ...msg, text: msg, type: type });
  };
  const handleCloseToast = () => {
    setValue(false);
    setMsg({});
  };
  const contextValue = {
    handleOpenToast,
    handleCloseToast,
    openToast: value,
    msg,
  };
  setTimeout(()=>{handleCloseToast()},3000)
  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};
export default ToastContext;
