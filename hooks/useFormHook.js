import { useState } from "react";

const useFormHook = (params) => {
  const [state, setState] = useState(params);

  const handleForms = (event) => {
    if (event.target) {
      setState({ ...state, [event.target.name]: event.target.value });
    } else {
      setState(event);
    }
  };

  return [state, handleForms];
};

export default useFormHook;
