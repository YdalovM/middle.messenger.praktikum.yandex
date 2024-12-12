import { EPATHS } from "../../types/general";
import { IVerificationContent } from "./types";

export const VERIFICATION_INPUTS_LOGIN = [
  {
    type: "text",
    placeholder: "Логин",
    name: "login",
  },
  {
    type: "password",
    placeholder: "Пароль",
    name: "password",
  },
];

export const VERIFICATION_INPUTS_REGISTER = [
  {
    type: "text",
    placeholder: "Почта",
    name: "email",
  },
  {
    type: "text",
    placeholder: "Логин",
    name: "login",
  },
  {
    type: "text",
    placeholder: "Имя",
    name: "name",
  },
  {
    type: "text",
    placeholder: "Фамилия",
    name: "last_name",
  },
  {
    type: "text",
    placeholder: "Телефон",
    name: "phone",
  },
  {
    type: "password",
    placeholder: "Пароль",
    name: "password",
  },
  {
    type: "password",
    placeholder: "Пароль (еще раз)",
    name: "password_again",
  },
];

export const VERIFICATION_CONTENT: Record<string, IVerificationContent> = {
  "/login": {
    title: "Вход",
    button_text: "Авторизоваться",
    link_text: "Нет аккаунта?",
    link_path: EPATHS.REGISTER,
    inputs: VERIFICATION_INPUTS_LOGIN,
  },
  "/register": {
    title: "Регистрация",
    button_text: "Зарегистрироваться",
    link_text: "Войти",
    link_path: EPATHS.LOGIN,
    inputs: VERIFICATION_INPUTS_REGISTER,
  },
};
