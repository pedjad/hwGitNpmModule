"use strict";
exports.__esModule = true;
var hwGitNpmModule = /** @class */ (function () {
    function hwGitNpmModule() {
        this.censorWords = ["sad", "mad", "bad"];
    }
    hwGitNpmModule.prototype.censor = function (inStr) {
        for (var idx in this.censorWords) {
            inStr = inStr.replace(this.censorWords[idx], "****");
        }
        return inStr;
    };
    return hwGitNpmModule;
}());
exports.hwGitNpmModule = hwGitNpmModule;
