const toast = require('powertoast');

function doNotify(evt) {
    if (evt.srcElement.id == "basic") {
        toast({
            appID: "Nyuka",
            title: "Hi there",
            message: "Someone commented your issue",
            icon: "N:\\PJ\\ElectronJS\\notifications\\slack_icon.png",
            onClick: "https://github.com/"
        }).catch(err => console.error(err));
    }
    else if (evt.srcElement.id == "image") {
        toast({
            appID: "Nyuka",
            title: "Hi there",
            message: "Someone commented your issue",
            icon: "https://static.npmjs.com/7a7ffabbd910fc60161bc04f2cee4160.png",
            onClick: "https://github.com/"
        }).catch(err => console.error(err));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("basic").addEventListener("click", doNotify);
    document.getElementById("image").addEventListener("click", doNotify);
})
