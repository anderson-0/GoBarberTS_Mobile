import React from "react";
import { TextInputProps } from "react-native";

import { Container, Icon, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name="mail" size={20} color="#666360" />
    <TextInput
      // Ignorar este warning. Se remover o {...rest} ele some. É algum bug na lib de tipos
      placeholderTextColor="#666360"
      keyboardAppearance="dark"
      {...rest}
    />
  </Container>
);

export default Input;
