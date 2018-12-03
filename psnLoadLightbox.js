function psnLoadLightbox(chckoutCode) {
    var scriptId = 'sounoob-pagseguro-lightbox';
    if(!document.getElementById(scriptId)) 
    {
        var filePath = "https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.lightbox.js";
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.id = scriptId;
        scriptTag.src = filePath + "?bust=" + new Date().getTime();
        scriptTag.onload = function(loadEvent) {
            PagSeguroLightbox(chckoutCode);
        }
        document.getElementsByTagName("head")[0].appendChild(scriptTag);
    }else{
        PagSeguroLightbox(chckoutCode);
    }
}
// Usage
psnLoadLightbox('B439FB200E0EF5CCC45F6F8E89FD58BF');