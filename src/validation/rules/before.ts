import * as isBefore from "validator/lib/isBefore";

export default {
  passes(value: any, parameters = []) {
    if (value) {
      return isBefore(value, parameters[0]);
    }
  },

  replacers() {
    return ["date"];
  }
};