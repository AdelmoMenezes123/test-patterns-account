"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrencyAPIFake {
    convert(amount, currency) {
        return amount * 5;
    }
}
exports.default = CurrencyAPIFake;
