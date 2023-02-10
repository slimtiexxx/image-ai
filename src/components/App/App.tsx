import React from "react";
import "./App.scss";
import { Container } from "@UI/Container/Container";
import { FormStepper } from "@components/FormStepper/FormStepper";
import { ChooseStyle } from "@forms/ChooseStyle/ChooseStyle";
import { ImageUpload } from "@forms/ImageUpload/ImageUpload";

function App() {
  return (
    <Container>
      <FormStepper steps={[ChooseStyle, ImageUpload]} />
    </Container>
  );
}

export default App;
