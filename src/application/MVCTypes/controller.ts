import { EventBus } from "../../core/EventBus";
import { Model } from "./model";

export interface Controller {
  model: Model;
  init(): void;
  eventBus: EventBus;
}
