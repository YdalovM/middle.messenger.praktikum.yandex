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
