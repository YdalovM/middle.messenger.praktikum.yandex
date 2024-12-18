import { Controller } from "../application/MVCTypes/controller";
import { renderTemplate } from "../template/renderTemplate";
import { EventBus } from "./EventBus";

export class Block {
  controller?: Controller;
  eventBus?: EventBus;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow",
    FLOW_RENDER: "render",
  };

  constructor() {
    this.eventBus = this.controller?.eventBus;
  }
  registerEvents(eventBus?: EventBus) {
    if (!eventBus) return;

    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render!.bind(this));
  }

  _render() {
    renderTemplate(this.render);
  }

  render() {}

  init() {
    this.registerEvents(this.eventBus);
    this.controller?.init();

    this.eventBus?.emit(Block.EVENTS.FLOW_RENDER);
  }
}
