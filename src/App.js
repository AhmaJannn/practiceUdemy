import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

function useInputWithValidate(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const validateInput = (value) => {
    return value.search(/\d/) >= 0;
  };

  const color = validateInput(value) ? "text-danger" : null;

  return { value, onChange, validateInput, color };
}

const Form = () => {
  // const [text, setText] = useState("");
  // const [textArea, setTextArea] = useState("");
  const text = useInputWithValidate("");
  const textArea = useInputWithValidate("");

  // const validateInput = (text) => {
  //   return text.search(/\d/) >= 0;
  // };

  // const color = validateInput(text) ? "text-danger" : null;
  // const color = text.validateInput() ? "text-danger" : null;

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <input
            className="form-control"
            value={`${text.value} / ${textArea.value}`}
            type="text"
            readOnly
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            className={`form-control ${text.color}`}
            onChange={text.onChange}
            type="email"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className={`form-control ${textArea.color}`}
            onChange={textArea.onChange}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
};

function App() {
  return <Form />;
}

export default App;
