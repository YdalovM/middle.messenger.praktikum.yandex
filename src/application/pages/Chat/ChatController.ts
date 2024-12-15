import { Controller } from "../../MVCTypes/controller";
import { ChatModel } from "./ChatModel";

export class ChatController implements Controller {
  model: ChatModel;

  constructor() {
    this.model = new ChatModel();
  }
}
