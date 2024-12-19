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
    // засовывается функция render, которая должна вернуть html в виде строки и подставиться в app
    renderTemplate(this.render);
  }

  // функция которая переопределяется в дочернем классе
  render() {}

  init() {
    // задаются события
    this.registerEvents(this.eventBus);
    // в контролере мы подписываемся на все возможные события на странице и подвязываем логику, это корретно
    this.controller?.init();

    // тут вызывается _render
    this.eventBus?.emit(Block.EVENTS.FLOW_RENDER);
  }
}
