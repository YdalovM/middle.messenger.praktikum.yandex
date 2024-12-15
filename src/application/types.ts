import { EPATHS } from "../types/general";

export interface IErrors {
  title: string;
  text: string;
  link: string;
}

export interface ICard {
  title: string;
  desc: string;
}

export interface IVerificationContent {
  title: string;
  button_text: string;
  link_text: string;
  link_path: EPATHS;
  inputs: IVerificationInput[];
}

export interface IVerificationInput {
  type: string;
  placeholder: string;
  name: string;
}

export interface IProfileInput {
  type: string;
  label: string;
  name: string;
}

export const PROFILE_INPUTS = [
  {
    type: "text",
    label: "Почта",
    name: "email",
  },
  {
    type: "text",
    label: "Логин",
    name: "login",
  },
  {
    type: "text",
    label: "Имя",
    name: "name",
  },
  {
    type: "text",
    label: "Фамилия",
    name: "last_name",
  },
  {
    type: "text",
    label: "Имя в чате",
    name: "display_name",
  },
  {
    type: "text",
    label: "Телефон",
    name: "phone",
  },
];

export const PROFILE_PASSWORDS_INPUTS = [
  {
    type: "text",
    label: "Старый пароль",
    name: "oldPassword",
  },
  {
    type: "text",
    label: "Новый пароль",
    name: "newPassword",
  },
  {
    type: "text",
    label: "Повторите новый пароль",
    name: "newPassword",
  },
];
