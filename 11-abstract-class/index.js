var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelTime = function () {
        // some complex proces 
        return 55;
    };
    return TakePhoto;
}());
var NewPhoto = /** @class */ (function (_super) {
    __extends(NewPhoto, _super);
    function NewPhoto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.photoId = "1122";
        return _this;
    }
    NewPhoto.prototype.getSepia = function () {
        console.log("sepia");
    };
    return NewPhoto;
}(TakePhoto));
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("another sepia");
    };
    return Instagram;
}(TakePhoto));
// let photoNote = new Instagram("color", "vintage") //abstract class doesn't allow to create object of a class
var instaIns = new Instagram("color", "vintage", 44);
instaIns.getReelTime();
