import {
  s
} from "./chunk-GFKAIPHP.js";
import "./chunk-5QRJQEQG.js";
import "./chunk-PZ5AY32C.js";

// node_modules/primevue/confirmationeventbus/index.mjs
var ConfirmationEventBus = s();

// node_modules/primevue/useconfirm/index.mjs
var PrimeVueConfirmSymbol = Symbol();

// node_modules/primevue/confirmationservice/index.mjs
var ConfirmationService = {
  install: function install(app) {
    var ConfirmationService2 = {
      require: function require2(options) {
        ConfirmationEventBus.emit("confirm", options);
      },
      close: function close() {
        ConfirmationEventBus.emit("close");
      }
    };
    app.config.globalProperties.$confirm = ConfirmationService2;
    app.provide(PrimeVueConfirmSymbol, ConfirmationService2);
  }
};
export {
  ConfirmationService as default
};
//# sourceMappingURL=primevue_confirmationservice.js.map
