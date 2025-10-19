var Assets = /** @class */ (function () {
    function Assets() {
    }
    Assets.getDefaultImage = function () {
        var image = document.querySelector("img#asset_default");
        if (image == null)
            throw Error("No assets found");
        return image;
    };
    Assets.getPlayerImage = function () {
        throw Error("Feature missing");
    };
    return Assets;
}());
export { Assets };
