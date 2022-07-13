// import { Component } from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0,
//     };
//   }
//
//   componentDidMount() {
//     document.title = `Slide ${this.state.slide}`;
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     if (prevState.slide === this.state.slide) {
//       return;
//     }
//     console.log("componentDidUpdate");
//     document.title = `Slide ${this.state.slide}`;
//   }
//
//   changeSlide = (i) => {
//     this.setState(({ slide }) => ({
//       slide: slide + i,
//     }));
//   };
//
//   toggleAutoplay = () => {
//     this.setState(({ autoplay }) => ({
//       autoplay: !autoplay,
//     }));
//   };
//
//   render() {
//     return (
//       <Container>
//         <div className="slider w-50 m-auto">
//           <img
//             className="d-block w-100"
//             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//             alt="slide"
//           />
//           <div className="text-center mt-5">
//             Active slide {this.state.slide} <br />{" "}
//             {this.state.autoplay ? "auto" : null}
//           </div>
//           <div className="buttons mt-3">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(-1)}
//             >
//               -1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(1)}
//             >
//               +1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={this.toggleAutoplay}
//             >
//               toggle autoplay
//             </button>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  // const [state, setState] = useState({slide: 0, autoplay: false});
  //
  // function changeSlide(i) {
  //     setState(state => ({...state, slide: state.slide + i}));
  // }
  //
  // function toggleAutoplay() {
  //     setState(state => ({...state, autoplay: !state.autoplay}));
  // }

  // function logging() {
  //   console.log("log!");
  // }

  // useEffect(() => {
  //   console.log("effect");
  //   document.title = `Slide ${slide}`;
  // }, []);

  useEffect(() => {
    console.log("effect update");
    document.title = `Slide ${slide}`;

    // window.addEventListener("click", logging);
    //
    // return () => {
    //   window.removeEventListener("click", logging);
    // };
  }, [slide]);

  useEffect(() => {
    console.log("autoplay");
  }, [autoplay]);

  function changeSlide(i) {
    setSlide((slide) => slide + i);
  }

  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay);
  }

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="slide"
        />
        <div className="text-center mt-5">
          Active slide {slide} <br /> {autoplay ? "auto" : null}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

function App() {
  const [slide, setSlide] = useState(true);

  return (
    <>
      <button onClick={() => setSlide(false)} className="btn btn-primary">
        delete
      </button>
      {slide ? <Slider /> : null}
    </>
  );
}

export default App;
