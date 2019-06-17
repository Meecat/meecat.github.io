window.onchange = function() {
    console.log("Changed !!");
    var banners = document.getElementsByClassName("banner");
    let logo = document.getElementsByClassName("logo");

    let width = $(window).width;

    console.log(banners);

    /*banners.array.forEach(element => {
        element.style.width=width+8;
    });*/

    for(var i=0;i<banners.length;i++) {
        let element = banners[i];
        element.style.width = (width+8).toString;
    }

    /*logo.array.forEach(element => {
        element.style.width = (1 / element.factor) * width
    });*/

    for(var i=0;i<logo.length;i++) {
        let element = logo[i];
        element.style.width = ((1 / 10) * width).toString;
    }
}