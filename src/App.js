import { useState, memo, Component, useCallback } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

// class Form extends Component {
//   shouldComponentUpdate(nextProps) {
//     if (this.props.mail.name === nextProps.mail.name) {
//       return false;
//     }
//     return true;
//   }
//
//   render() {
//     console.log("render");
//     return (
//       <Container>
//         <form className="w-50 border mt-5 p-3 m-auto">
//           <div className="mb-3">
//             <label
//               htmlFor="exampleFormControlInput1"
//               className="form-label mt-3"
//             >
//               Email address
//             </label>
//             <input
//               value={this.props.mail.name}
//               type="email"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="name@example.com"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlTextarea1" className="form-label">
//               Example textarea
//             </label>
//             <textarea
//               value={this.props.text}
//               className="form-control"
//               id="exampleFormControlTextarea1"
//               rows="3"
//             ></textarea>
//           </div>
//         </form>
//       </Container>
//     );
//   }
// }

// function propsCompare(prevProps, nextProps) {
//   return prevProps.mail.text === nextProps.mail.text;
// }

const Form = memo((props) => {
  console.log("render");
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            value={props.mail}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            value={props.text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
});

function App() {
  const [data, setData] = useState({
    mail: "name@example.com",
    text: "some text",
  });

  const onLog = useCallback(() => {
    console.log("wow");
  }, []);

  return (
    <>
      <Form mail={data.mail} text={data.text} onLog={onLog} />
      <button
        onClick={() =>
          setData({
            mail: "name@example.com",
            text: "some text",
          })
        }
      >
        Click me
      </button>
    </>
  );
}

export default App;
