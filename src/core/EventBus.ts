export type ICallbackEventBus = (...args: unknown[]) => unknown;

export class EventBus {
  listeners: Record<string, Array<ICallbackEventBus>>;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: ICallbackEventBus) {
    this.listeners[event].push(callback);
  }

  off(event: string, callback: ICallbackEventBus) {
    const listeners = this.listeners[event];

    if (!listeners) {
      throw new Error("No listeners");
    }

    listeners.splice(listeners.indexOf(callback), 1);
  }

  emit(event: string, ...args: unknown[]) {
    const listeners = this.listeners[event];
    if (!listeners) {
      throw new Error("No listeners");
    }
    listeners.forEach((listener) => {
      listener(...args);
    });
  }
}
