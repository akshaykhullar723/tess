/* Flickity sliders */

(function() {
    /* Loading Flickity */
    const loadFlickityifNotLoadedYet = () => {
        return new Promise(resolve => {
            if (window['Flickity']) resolve();
            const linkElement = document.head.querySelector(`link[href="${theme_directory}/assets/flickity/flickity.css"]`);
            if (!linkElement) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = `${theme_directory}/assets/flickity/flickity.css`;
                const firstLink = document.head.querySelector('link');
                if (firstLink) {
                    document.head.insertBefore(link, firstLink);
                } else {
                    document.head.appendChild(link);
                }
            }
            const scriptSrc = `${theme_directory}/assets/flickity/flickity.pkgd.js`;
            let script = document.head.querySelector(`script[src="${scriptSrc}"]`);
            if (!script) {
                script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = `${theme_directory}/assets/flickity/flickity.pkgd.js`;
                document.head.appendChild(script);
                script.addEventListener('load', () => {
                    resolve();
                });
            } else {
                script.addEventListener('load', () => {
                    resolve();
                });
            }
        });
    };
    /* Running Flickity - Slider 1 */
    (() => {
        loadFlickityifNotLoadedYet().then(() => {
            if (!!document.querySelectorAll('.testimonials__slider-container').length) {
                const testimonialsSlider = new Flickity('.testimonials__slider-container', {
                    accessibility: true,
                    // enable keyboard navigation, pressing left & right keys

                    adaptiveHeight: false,
                    // set carousel height to the selected slide

                    autoPlay: false,
                    // advances to the next cell
                    // if true, default is 3 seconds
                    // or set time between advances in milliseconds
                    // i.e. `autoPlay: 1000` will advance every 1 second

                    cellAlign: 'left',
                    // alignment of cells, 'center', 'left', or 'right'
                    // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

                    cellSelector: undefined,
                    // specify selector for cell elements in case you want absolute-positioned elements that aren't cells

                    contain: true,
                    // will contain cells to container
                    // so no excess scroll at beginning or end
                    // has no effect if wrapAround is enabled

                    draggable: '>1',
                    // enables dragging & flicking
                    // if at least 2 cells

                    dragThreshold: 2,
                    // number of pixels a user must scroll horizontally to start dragging
                    // increase to allow more room for vertical scroll for touch devices

                    freeScroll: false,
                    // enables content to be freely scrolled and flicked
                    // without aligning cells

                    friction: 0.3,
                    // smaller number = easier to flick farther

                    groupCells: true,
                    // group cells together in slides

                    initialIndex: 0,
                    // zero-based index of the initial selected cell

                    imagesLoaded: true,
                    // Wait until images are loaded before sizing the slider. Prevents buggy behavior

                    percentPosition: true,
                    // sets positioning in percent values, rather than pixels
                    // Enable if items have percent widths
                    // Disable if items have pixel widths, like images

                    prevNextButtons: true,
                    // creates and enables buttons to click to previous & next cells

                    pageDots: true,
                    // create and enable page dots

                    resize: true,
                    // listens to window resize events to adjust size & positions

                    rightToLeft: false,
                    // enables right-to-left layout

                    setGallerySize: false,
                    // sets the height of gallery
                    // disable if gallery already has height set with CSS

                    watchCSS: false,
                    // watches the content of :after of the element
                    // activates if #element:after { content: 'flickity' }

                    wrapAround: false,
                    // at end of cells, wraps-around to first for infinite scrolling

                    arrowShape: {
                        x0: 10,
                        x1: 55,
                        y1: 45,
                        x2: 60,
                        y2: 40,
                        x3: 20
                    }
                });
            }
        });
    })();
    (() => {
        loadFlickityifNotLoadedYet().then(() => {
            if (!!document.querySelectorAll('.milestones__items-container').length) {
                const testimonialsSlider = new Flickity('.milestones__items-container', {
                    accessibility: true,
                    // enable keyboard navigation, pressing left & right keys

                    adaptiveHeight: false,
                    // set carousel height to the selected slide

                    autoPlay: false,
                    // advances to the next cell
                    // if true, default is 3 seconds
                    // or set time between advances in milliseconds
                    // i.e. `autoPlay: 1000` will advance every 1 second

                    cellAlign: 'left',
                    // alignment of cells, 'center', 'left', or 'right'
                    // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

                    cellSelector: undefined,
                    // specify selector for cell elements in case you want absolute-positioned elements that aren't cells

                    contain: true,
                    // will contain cells to container
                    // so no excess scroll at beginning or end
                    // has no effect if wrapAround is enabled

                    draggable: '>1',
                    // enables dragging & flicking
                    // if at least 2 cells

                    dragThreshold: 2,
                    // number of pixels a user must scroll horizontally to start dragging
                    // increase to allow more room for vertical scroll for touch devices

                    freeScroll: false,
                    // enables content to be freely scrolled and flicked
                    // without aligning cells

                    friction: 0.3,
                    // smaller number = easier to flick farther

                    groupCells: true,
                    // group cells together in slides

                    initialIndex: 0,
                    // zero-based index of the initial selected cell

                    imagesLoaded: true,
                    // Wait until images are loaded before sizing the slider. Prevents buggy behavior

                    percentPosition: true,
                    // sets positioning in percent values, rather than pixels
                    // Enable if items have percent widths
                    // Disable if items have pixel widths, like images

                    prevNextButtons: true,
                    // creates and enables buttons to click to previous & next cells

                    pageDots: true,
                    // create and enable page dots

                    resize: true,
                    // listens to window resize events to adjust size & positions

                    rightToLeft: false,
                    // enables right-to-left layout

                    setGallerySize: false,
                    // sets the height of gallery
                    // disable if gallery already has height set with CSS

                    watchCSS: false,
                    // watches the content of :after of the element
                    // activates if #element:after { content: 'flickity' }

                    wrapAround: false,
                    // at end of cells, wraps-around to first for infinite scrolling

                    arrowShape: {
                        x0: 10,
                        x1: 55,
                        y1: 45,
                        x2: 65,
                        y2: 35,
                        x3: 30
                    }
                });
            }
        });
    })();
    (() => {
        loadFlickityifNotLoadedYet().then(() => {
            if (!!document.querySelectorAll('.recent-news__container').length) {
                const testimonialsSlider = new Flickity('.recent-news__container', {
                    accessibility: true,
                    // enable keyboard navigation, pressing left & right keys

                    adaptiveHeight: false,
                    // set carousel height to the selected slide

                    autoPlay: true,
                    // advances to the next cell
                    // if true, default is 3 seconds
                    // or set time between advances in milliseconds
                    // i.e. `autoPlay: 1000` will advance every 1 second

                    cellAlign: 'left',
                    // alignment of cells, 'center', 'left', or 'right'
                    // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

                    cellSelector: undefined,
                    // specify selector for cell elements in case you want absolute-positioned elements that aren't cells

                    contain: true,
                    // will contain cells to container
                    // so no excess scroll at beginning or end
                    // has no effect if wrapAround is enabled

                    draggable: '>1',
                    // enables dragging & flicking
                    // if at least 2 cells

                    dragThreshold: 2,
                    // number of pixels a user must scroll horizontally to start dragging
                    // increase to allow more room for vertical scroll for touch devices

                    freeScroll: false,
                    // enables content to be freely scrolled and flicked
                    // without aligning cells

                    friction: 0.3,
                    // smaller number = easier to flick farther

                    groupCells: true,
                    // group cells together in slides

                    initialIndex: 0,
                    // zero-based index of the initial selected cell

                    imagesLoaded: true,
                    // Wait until images are loaded before sizing the slider. Prevents buggy behavior

                    percentPosition: true,
                    // sets positioning in percent values, rather than pixels
                    // Enable if items have percent widths
                    // Disable if items have pixel widths, like images

                    prevNextButtons: true,
                    // creates and enables buttons to click to previous & next cells

                    pageDots: false,
                    // create and enable page dots

                    resize: true,
                    // listens to window resize events to adjust size & positions

                    rightToLeft: false,
                    // enables right-to-left layout

                    setGallerySize: false,
                    // sets the height of gallery
                    // disable if gallery already has height set with CSS

                    watchCSS: false,
                    // watches the content of :after of the element
                    // activates if #element:after { content: 'flickity' }

                    wrapAround: false,
                    // at end of cells, wraps-around to first for infinite scrolling

                    arrowShape: {
                        x0: 10,
                        x1: 55,
                        y1: 45,
                        x2: 60,
                        y2: 40,
                        x3: 20
                    }
                });
            }
        });
    })();
    (() => {
        loadFlickityifNotLoadedYet().then(() => {
            if (!!document.querySelectorAll('.featured-news-slider__news-container').length) {
                const testimonialsSlider = new Flickity('.featured-news-slider__news-container', {
                    accessibility: true,
                    // enable keyboard navigation, pressing left & right keys

                    adaptiveHeight: false,
                    // set carousel height to the selected slide

                    autoPlay: false,
                    // advances to the next cell
                    // if true, default is 3 seconds
                    // or set time between advances in milliseconds
                    // i.e. `autoPlay: 1000` will advance every 1 second

                    cellAlign: 'left',
                    // alignment of cells, 'center', 'left', or 'right'
                    // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

                    cellSelector: undefined,
                    // specify selector for cell elements in case you want absolute-positioned elements that aren't cells

                    contain: true,
                    // will contain cells to container
                    // so no excess scroll at beginning or end
                    // has no effect if wrapAround is enabled

                    draggable: '>1',
                    // enables dragging & flicking
                    // if at least 2 cells

                    dragThreshold: 2,
                    // number of pixels a user must scroll horizontally to start dragging
                    // increase to allow more room for vertical scroll for touch devices

                    freeScroll: false,
                    // enables content to be freely scrolled and flicked
                    // without aligning cells

                    friction: 0.3,
                    // smaller number = easier to flick farther

                    groupCells: true,
                    // group cells together in slides

                    initialIndex: 0,
                    // zero-based index of the initial selected cell

                    imagesLoaded: true,
                    // Wait until images are loaded before sizing the slider. Prevents buggy behavior

                    percentPosition: true,
                    // sets positioning in percent values, rather than pixels
                    // Enable if items have percent widths
                    // Disable if items have pixel widths, like images

                    prevNextButtons: true,
                    // creates and enables buttons to click to previous & next cells

                    pageDots: true,
                    // create and enable page dots

                    resize: true,
                    // listens to window resize events to adjust size & positions

                    rightToLeft: false,
                    // enables right-to-left layout

                    setGallerySize: false,
                    // sets the height of gallery
                    // disable if gallery already has height set with CSS

                    watchCSS: false,
                    // watches the content of :after of the element
                    // activates if #element:after { content: 'flickity' }

                    wrapAround: false,
                    // at end of cells, wraps-around to first for infinite scrolling

                    arrowShape: {
                        x0: 10,
                        x1: 55,
                        y1: 45,
                        x2: 60,
                        y2: 40,
                        x3: 20
                    }
                });
            }
        });
    })();
    (() => {
        loadFlickityifNotLoadedYet().then(() => {
            if (!!document.querySelectorAll('.hero-carousel').length) {
                const heroSlider = new Flickity('.hero-carousel', {
                    accessibility: true,
                    // enable keyboard navigation, pressing left & right keys

                    adaptiveHeight: true,
                    // set carousel height to the selected slide

                    autoPlay: true,
                    // advances to the next cell
                    // if true, default is 3 seconds
                    // or set time between advances in milliseconds
                    // i.e. `autoPlay: 1000` will advance every 1 second

                    cellAlign: 'left',
                    // alignment of cells, 'center', 'left', or 'right'
                    // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

                    cellSelector: undefined,
                    // specify selector for cell elements in case you want absolute-positioned elements that aren't cells

                    contain: true,
                    // will contain cells to container
                    // so no excess scroll at beginning or end
                    // has no effect if wrapAround is enabled

                    draggable: '>1',
                    // enables dragging & flicking
                    // if at least 2 cells

                    dragThreshold: 2,
                    // number of pixels a user must scroll horizontally to start dragging
                    // increase to allow more room for vertical scroll for touch devices

                    freeScroll: false,
                    // enables content to be freely scrolled and flicked
                    // without aligning cells

                    friction: 0.3,
                    // smaller number = easier to flick farther

                    groupCells: true,
                    // group cells together in slides

                    initialIndex: 0,
                    // zero-based index of the initial selected cell

                    imagesLoaded: true,
                    // Wait until images are loaded before sizing the slider. Prevents buggy behavior

                    percentPosition: true,
                    // sets positioning in percent values, rather than pixels
                    // Enable if items have percent widths
                    // Disable if items have pixel widths, like images

                    prevNextButtons: true,
                    // creates and enables buttons to click to previous & next cells

                    pageDots: true,
                    // create and enable page dots

                    resize: true,
                    // listens to window resize events to adjust size & positions

                    rightToLeft: false,
                    // enables right-to-left layout

                    setGallerySize: true,
                    // sets the height of gallery
                    // disable if gallery already has height set with CSS

                    watchCSS: false,
                    // watches the content of :after of the element
                    // activates if #element:after { content: 'flickity' }

                    wrapAround: false,
                    // at end of cells, wraps-around to first for infinite scrolling

                    arrowShape: {
                        x0: 10,
                        x1: 55,
                        y1: 45,
                        x2: 60,
                        y2: 40,
                        x3: 20
                    }
                });
            }
        });
    })();
})();