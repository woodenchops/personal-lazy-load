window.addEventListener('scroll', function () {
    var allimages = document.getElementsByTagName('img');
    let parentDiv = document.querySelectorAll('.parentDiv');

    for (var i = 0; i < allimages.length; i++) {

        if (allimages[i].getAttribute('data-src')) {

            let imageTopOffset = allimages[i].offsetTop;
            console.log(imageTopOffset);

            if (pageYOffset >= imageTopOffset) {

                allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));

            }
        }
    }
}, false)


/*

NOTE:

All images have been placed within a empty div. These divs were given a class of .parentDiv.

The aim of this code is to load the images just before the bottom of the viewport hits the top of the image.

*/