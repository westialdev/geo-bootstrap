(function ($) {
    var loadDetails = function (version) {
        var loading = $("#show-loading");
        var destination = $("#show");
        $("#detalles-programa").show();
        loading.show();
        destination.load(`programa/${version}.html`);
        loading.hide();
    }
    let params = new URLSearchParams(window.location.search);
    if (params.has("v")) loadDetails(params.get("v"));
})(window.jQuery);