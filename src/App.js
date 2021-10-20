import React, { Component } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Clarifai from "clarifai";
import Image_input_field from "./components/image_input_field/Image_input_field";
import Rank from "./components/rank/Rank";
import Recognised_image from "./components/recognised_image/Recognised_image";
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
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function (err) {}
    );
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

        <Recognised_image imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
