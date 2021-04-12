import React from "react";
import { Image, KeyboardAvoidingView, Platform, View } from "react-native";
import { Feather as IconFeather } from "@expo/vector-icons";

import {
  Container,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  CreateAccountButton,
  Title,
  CreateAccountButtonText,
} from "./styles";

import logoImg from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faca seu login</Title>
            </View>
            <Input name="email" icon="email" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                console.log("deu");
              }}
            >
              Entrar
            </Button>
            <ForgotPasswordButton>
              <ForgotPasswordButtonText>
                Esqueci minha senha
              </ForgotPasswordButtonText>
            </ForgotPasswordButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => {}}>
        <IconFeather name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
