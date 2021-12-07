import React, { Component } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Clarifai from "clarifai";
import Image_input_field from "./components/image_input_field/Image_input_field";
import Rank from "./components/rank/Rank";
import Recognised_image from "./components/recognised_image/Recognised_image";
import Sign_in from "./components/sign_in/Sign_in";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "f9d0ebd6f7f643a391cb297d36b02334",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Particles options={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <Image_input_field
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />

        <Recognised_image box={this.state.box} imageUrl={this.state.imageUrl} />

        <Sign_in />
      </div>
    );
  }
}

export default App;
