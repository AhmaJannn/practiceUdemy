import { useContext } from "react";
import dataContext from "./context";

const InputComponent = () => {
  const context = useContext(dataContext);
  return (
    <input
      value={context.mail}
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
      onFocus={context.forceChangeMail}
    />
  );
};

export default InputComponent;
