import React from "react";
import { Image, KeyboardAvoidingView, Platform, View } from "react-native";
import { Feather as IconFeather } from "@expo/vector-icons";

import {
  Container,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  BackToSignInButton,
  Title,
  BackToSignInButtonText,
} from "./styles";

import logoImg from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SignUp: React.FC = () => {
  const navigation = useNavigation();
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
              <Title>Crie sua Conta</Title>
            </View>
            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="email" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                console.log("deu");
              }}
            >
              Cadastrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignInButton onPress={() => navigation.goBack()}>
        <IconFeather name="arrow-left" size={20} color="#fff" />
        <BackToSignInButtonText>Voltar para Login</BackToSignInButtonText>
      </BackToSignInButton>
    </>
  );
};

export default SignUp;
