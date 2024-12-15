import { Controller } from "./controller";

export interface View {
  render(): string;
  controller: Controller;
}
