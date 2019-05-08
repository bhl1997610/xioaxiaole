var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HTTPServer = /** @class */ (function (_super) {
    __extends(HTTPServer, _super);
    function HTTPServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTPServer.prototype.connect = function (addr, msg) {
        this.hr = new Laya.HttpRequest();
        this.hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress); //进行中
        this.hr.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete); //完成
        this.hr.once(Laya.Event.ERROR, this, this.onHttpRequestError); //报错
        this.hr.send(addr, msg, 'post', 'text');
    };
    HTTPServer.prototype.onHttpRequestProgress = function (e) {
        //console.log(e)
    };
    HTTPServer.prototype.onHttpRequestComplete = function (e) {
        this.event("HTTPCOMPLETE", e);
    };
    HTTPServer.prototype.onHttpRequestError = function (e) {
        this.event("HTTPERROR");
        console.log(e);
    };
    return HTTPServer;
}(Laya.EventDispatcher));
//# sourceMappingURL=HttpServer.js.map