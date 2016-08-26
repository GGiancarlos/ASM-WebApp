var Demo = {

    update : function () {
        var x = xLabs.getConfig("state.head.x");
        var y = xLabs.getConfig("state.head.y");
        var targetElement = document.getElementById("target");
        targetElement.style.left = (screen.width  * 0.5) - (x * 600);
        targetElement.style.top  = (screen.height * 0.5) + (y * 600);
    },

    ready : function() {
        xLabs.setConfig("system.mode", "head");
        xLabs.setConfig("browser.canvas.paintHeadPose", "0");
        window.addEventListener( "beforeunload", function() {
            xLabs.setConfig("system.mode", "off");
        });
    }

};

xLabs.setup(Demo.ready, Demo.update, null, "c09ce657-f1d4-434f-852c-e41bb0907ebb");
if (!xLabs.extensionVersion()) { 
    alert('extension not installed');
}