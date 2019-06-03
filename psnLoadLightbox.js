function psnLoadLightbox(chckoutCode, isSandbox) {
    var scriptId = 'sounoob-pagseguro-lightbox-' + (isSandbox === true ? "sandbox" : "prod");
    if(!document.getElementById(scriptId)) 
    {
        var filePath = "https://stc." + (isSandbox === true ? "sandbox." : "") + "pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.lightbox.js";
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.id = scriptId;
        scriptTag.src = filePath + "?bust=" + new Date().getTime();
        scriptTag.onload = function() {
            psnLightboxReady(chckoutCode);
        }
        document.getElementsByTagName("head")[0].appendChild(scriptTag);
    }else{
        psnLightboxReady(chckoutCode);
    }
}

function psnLightboxReady(code) {
    PagSeguroLightbox(code);
}




// Usage
//Call a prod lightbox
psnLoadLightbox('B439FB200E0EF5CCC45F6F8E89FD58BF');
//Call a sandbox lightbox
psnLoadLightbox('B439FB200E0EF5CCC45F6F8E89FD58BF', true);

/*
** The easy way to load the lightbox
*/

/*
** The complete way to load the lightbox with callbacks and fallback
*/
/*
function psnLightboxReady(code) {
    var callback = {
    success : function(transactionCode) {
        console.log("Success, transaction code is: " + transactionCode);
    },
    abort : function() {
        //Insira os comandos para quando o usuário abandonar a tela de pagamento.
        console.log("The user is gonne");
    }
    };
    var isOpenLightbox = PagSeguroLightbox(code, callback);
    if (!isOpenLightbox){
        location.href="https://pagseguro.uol.com.br/v2/checkout/payment.html?code=" + code;
    }
}
*/