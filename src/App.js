import React, { Component } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Clarifai from "clarifai";
import ImageInputField from "./components/image_input_field/ImageInputField";
import Rank from "./components/rank/Rank";
import RecognisedImage from "./components/recognised_image/RecognisedImage";
import SignIn from "./components/sign_in/SignIn";
import Register from "./components/register/Register";
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
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
       }
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
      .then((response) =>{
      if(response){
        fetch("http://localhost:3131/image", {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: this.state.user.id
          }),
        })
          .then((resp) => resp.json())
          .then((count) => this.setState(Object.assign(this.state.user,{entries:count})))
      }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "signout") this.setState({ isSignedIn: false });
    else if (route === "home") this.setState({ isSignedIn: true });

    this.setState({ route: route });
  };

  setSignInStatusFalse = () => {
    this.state({ isSignedIn: false });
  };

  loadUser = (userDetails)=>{
this.setState({user:{...userDetails}});
console.log("loadUsers", this.state.user);
  }

  render() {
    return (
      <div className="App">
        <Particles options={particlesOptions} />
        <Navigation
          isSignedIN={this.state.isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        <Logo />
        {this.state.route === "home" ? (
          <div className="">
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageInputField
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />

            <RecognisedImage
              box={this.state.box}
              imageUrl={this.state.imageUrl}
            />
          </div>
        ) : this.state.route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register onRouteChange={this.onRouteChange}  loadUser={this.loadUser}/>
        )}
      </div>
    );
  }
}

export default App;
