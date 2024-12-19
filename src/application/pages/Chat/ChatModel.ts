import { Model } from "../../MVCTypes/model";

export class ChatModel implements Model {
  data: string;

  constructor() {
    this.data = "123";
  }
}
