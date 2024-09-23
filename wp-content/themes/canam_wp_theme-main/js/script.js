if (navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.querySelector('body').classList.add('safari');
}

/* Paralizing href attribute on nav links */
document.querySelectorAll('.menu-item-has-children').forEach(element => {
    element.firstChild.href = 'javascript:void(0);';
    element.addEventListener('mouseover', e => {
        if (window.matchMedia('(min-width: 1230px)').matches) {
            element.classList.add('focus');
        }
    });
    element.addEventListener('mouseleave', e => {
        if (window.matchMedia('(min-width: 1230px)').matches) {
            element.classList.remove('focus');
        }
    });
});

/* Header transition on scroll */
const primary = document.querySelector('#primary');
const mastHead = document.querySelector('#masthead');
document.addEventListener('scroll', e => {
    if (primary.getBoundingClientRect().top <= -70 ||
        document.querySelector('.policy') ||
        document.querySelector('.post-template-default') ||
        document.querySelector('.search') ||
        document.querySelector('.archive') ||
        document.querySelector('.news-insights')) {
        mastHead.classList.add('scrolled');
    } else {
        mastHead.classList.remove('scrolled');
    }
});
window.dispatchEvent(new Event('scroll'));

/* Move CTA for split block (bullets content) below 800px */
document.querySelectorAll('.split.bullets').forEach(el => {
    const splitCta = el.querySelector('.split__cta');
    const newParent = el.querySelector('.split__container');
    const oldParent = el.querySelector('.split__text-container');
    if (window.innerWidth <= 800) {
        newParent ? .appendChild(splitCta);
    };
    window.addEventListener('resize', e => {
        if (window.innerWidth <= 800) {
            newParent ? .appendChild(splitCta);
        } else {
            oldParent ? .appendChild(splitCta);
        }
    });
});

/* Team modals */
const teamMembers = document.querySelectorAll('.team__item > .team__item-image');
teamMembers.forEach(teamMember => {
    teamMember.addEventListener('click', e => {
        const modal = teamMember.parentElement.querySelector('dialog');
        console.log(modal);
        e.preventDefault();
        document.body.classList.add('scroll-none');
        dialogOpen(modal);
    })
});

document.querySelectorAll('dialog .dialog-close').forEach(btn => {
    btn.addEventListener('click', e => {
        dialogClose(document.querySelector('dialog[open]'));
    })
});

function dialogOpen(dialog) {
    dialog ? .showModal()
    document.body.classList.add('scroll-none');
}

function dialogClose(dialog) {
    dialog.classList.add('hide')
    setTimeout(function() {
        dialog.classList.remove('hide');
        dialog.close();
        document.body.classList.remove('scroll-none');
    }, 500);
};

document.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        document.body.classList.remove('scroll-none');
    }
})

/* Visa program nav & display */

const visaNavItems = document.querySelectorAll('.visa-program__item-nav');
const firstVisaNavItem = visaNavItems[0];

const visaTabItems = document.querySelectorAll('.visa-program__tab-container');
const firstVisaTabItem = visaTabItems[0];

if (firstVisaNavItem) {
    firstVisaNavItem.classList.add('visa-nav-active');
}
if (firstVisaTabItem) {
    firstVisaTabItem.classList.add('visa-tab-active');
}

visaNavItems.forEach((button, index) => {
    button.addEventListener('click', function() {
        for (e = 0; e < visaNavItems.length; e++) {
            visaNavItems[e].classList.remove('visa-nav-active');
            visaTabItems[e] ? .classList.remove('visa-tab-active');
        }
        this.classList.toggle('visa-nav-active');
        visaTabItems[index] ? .classList.toggle('visa-tab-active');
        window.dispatchEvent(new Event('resize'));
    });
});

const visaProgramNavBefore = document.querySelector('.visa-program__item-nav-before');
const visaProgramNavAfter = document.querySelector('.visa-program__item-nav-after');

if (visaProgramNavAfter) {
    visaProgramNavAfter.addEventListener('click', e => {
        e.preventDefault();
        var el = document.querySelector('.visa-nav-active');
        el ? .nextElementSibling.click();
        document.querySelector('.visa-program__nav-container').scrollLeft = el.nextElementSibling.offsetLeft - 36;
    })
}

if (visaProgramNavBefore) {
    visaProgramNavBefore.addEventListener('click', e => {
        e.preventDefault();
        var el = document.querySelector('.visa-nav-active');
        el ? .previousElementSibling.click();
        document.querySelector('.visa-program__nav-container').scrollLeft = el.previousElementSibling.offsetLeft - 36;
    })
}

/* Map */

let map;

async function initMap() {
    if (!!document.querySelectorAll('.map').length) {

        const {
            Map
        } = await google.maps.importLibrary("maps");

        document.querySelectorAll('.map').forEach(async mapEl => {

            map = new Map(mapEl, {
                center: {
                    lat: 40.706588397146554,
                    lng: -74.00918655357485
                },
                zoom: 15,
                disableDefaultUI: true,
                styles: [{
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#e9e9e9"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#dedede"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [{
                                "saturation": 36
                            },
                            {
                                "color": "#333333"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#f2f2f2"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    }
                ]
            });

            const icon = {
                url: `${path}/assets/images/marker.png`,
                scaledSize: new google.maps.Size(35, 35), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            const marker = new google.maps.Marker({
                position: {
                    lat: 40.706588397146554,
                    lng: -74.00918655357485
                },
                map,
                icon: icon
            });

            const contentString =
                '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h1 id="firstHeading" class="firstHeading">CanAm Enterprises</h1>' +
                '<div id="bodyContent">' +
                "<p>48 Wall Street, 24th Floor," +
                "<br>New York, NY 10005</p>" +
                "</div>" +
                '<div id="bodyLink">' +
                "<a href='https://www.google.com/maps/place/CanAm+Enterprises/@40.7065558,-74.0117749,17z/data=!3m2!4b1!5s0x89c25a165a98e9dd:0x6c5e9506819f6b38!4m6!3m5!1s0x89c25a1620d24999:0xe7f07271674dbe19!8m2!3d40.7065518!4d-74.0091946!16s%2Fg%2F1w15_c0_?entry=ttu' target='_blank'>View directions" +
                "</div>" +
                "</div>";
            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                ariaLabel: "CanAm",
            });
            marker.addListener("click", () => {
                infowindow.open({
                    anchor: marker,
                    map,
                });
            });

        });

    };

};

/* Past EB5 nav & display */

const pastEb5NavItems = document.querySelectorAll('.past-eb5__item-nav');
const firstPastEb5NavItem = pastEb5NavItems[0];

const pastEb5TabItems = document.querySelectorAll('.past-eb5__items-container');
const firstPastEb5TabItem = pastEb5TabItems[0];

if (firstPastEb5NavItem) {
    firstPastEb5NavItem.classList.add('past-eb5-nav-active');
}
if (firstPastEb5TabItem) {
    firstPastEb5TabItem.classList.add('past-eb5-tab-active');
}

pastEb5NavItems.forEach((button, index) => {
    button.addEventListener('click', function() {
        for (e = 0; e < pastEb5NavItems.length; e++) {
            pastEb5NavItems[e].classList.remove('past-eb5-nav-active');
            pastEb5TabItems[e] ? .classList.remove('past-eb5-tab-active');
        }
        this.classList.toggle('past-eb5-nav-active');
        pastEb5TabItems[index] ? .classList.toggle('past-eb5-tab-active');
        pastEb5HiddenItems = document.querySelectorAll('.past-eb5-tab-active .past-eb5__item.hide');
        window.dispatchEvent(new Event('resize'));
        PastEb5PrevButtons = document.querySelectorAll('.past-eb5-tab-active .past-eb5__prev-container');
        PastEb5NextButtons = document.querySelectorAll('.past-eb5-tab-active .past-eb5__next-container');
        PastEb5Modals = document.querySelectorAll('.past-eb5-tab-active .past-eb5__item dialog');
        dialogPop();
    });
});

const pastEb5NavBefore = document.querySelector('.past-eb5__item-nav-before');
const pastEb5NavAfter = document.querySelector('.past-eb5__item-nav-after');

if (pastEb5NavAfter) {
    pastEb5NavAfter.addEventListener('click', e => {
        e.preventDefault();
        var el = document.querySelector('.past-eb5-nav-active');
        el ? .nextElementSibling.click();
        document.querySelector('.past-eb5__nav-container').scrollLeft = el.nextElementSibling.offsetLeft - 36;
    })
}

if (pastEb5NavBefore) {
    pastEb5NavBefore.addEventListener('click', e => {
        e.preventDefault();
        var el = document.querySelector('.past-eb5-nav-active');
        el ? .previousElementSibling.click();
        document.querySelector('.past-eb5__nav-container').scrollLeft = el.previousElementSibling.offsetLeft - 36;
    })
}


/* Past EB5 display first 9 items */

const pastEb5ViewMore = document.querySelectorAll('.past-eb5__view-more-cta');
let pastEb5HiddenItems = document.querySelectorAll('.past-eb5-tab-active .past-eb5__item.hide');

if (pastEb5ViewMore) {
    pastEb5ViewMore.forEach(el => {
        el.addEventListener('click', e => {
            var counter = 0;

            pastEb5HiddenItems.forEach(pastEb5HiddenItem => {
                counter++;
                if (counter <= 9) {
                    pastEb5HiddenItem.classList.remove('hide');
                }
            })
            pastEb5HiddenItems = document.querySelectorAll('.past-eb5-tab-active .past-eb5__item.hide');
            e.preventDefault();
            if (pastEb5HiddenItems.length === 0) {
                el.remove();
            }
        })
    })

}

/* Past EB5 modals */
const pastEb5items = document.querySelectorAll('.past-eb5__item');
pastEb5items.forEach(pastEb5item => {
    const modal = pastEb5item.children[3];
    pastEb5item.addEventListener('click', e => {
        e.preventDefault();
        dialogOpen(modal);
    })
});

/* Navigation between past EB5 modals */

let PastEb5Modals = document.querySelectorAll('.past-eb5-tab-active .past-eb5__item dialog');
let PastEb5PrevButtons = document.querySelectorAll('.past-eb5-tab-active .past-eb5__prev');
let PastEb5NextButtons = document.querySelectorAll('.past-eb5-tab-active .past-eb5__next');
/* When there's a click on a prev button, I open the prev modal */

function dialogPop() {
    PastEb5PrevButtons.forEach((button, index) => {
        button.addEventListener('click', e => {
            document.body.classList.add('scroll-none');
            dialogClose(document.querySelector('dialog[open]'));
            if (PastEb5Modals[index] > 0) {
                dialogOpen(PastEb5Modals[index - 1]);
            } else {
                dialogOpen(PastEb5Modals[index]);
            }
            e.preventDefault();
        });
    });
    PastEb5NextButtons.forEach((button, index) => {
        button.addEventListener('click', e => {
            document.body.classList.add('scroll-none');
            dialogClose(document.querySelector('dialog[open]'));
            dialogOpen(PastEb5Modals[index + 1]);
            e.preventDefault();
        });
    });
}
dialogPop();

/* Show modal for current offering on pageload */
const currentOfferingModal = document.querySelector('.current-eb-5-offering dialog');
const currentOfferingModalYesCta = document.querySelector('.current-eb-5-offering .modal-eb5-offering__cta-yes');
const currentOfferingModalNoCta = document.querySelector('.current-eb-5-offering .modal-eb5-offering__cta-no');
if (currentOfferingModal) {
    window.onload = (event) => {
        document.body.classList.add('scroll-none');
        dialogOpen(currentOfferingModal);
    };
    currentOfferingModalYesCta.addEventListener('click', e => {
        e.preventDefault();
        dialogClose(document.querySelector('dialog[open]'));
    });
}

/*global  dialog popup backgound click*/

document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('mousedown', (e) => {
        // If the click is directly on the dialog element (which includes the backdrop)
        if (e.target === dialog) {
            const rect = dialog.getBoundingClientRect();

            // Check if the click is outside the dialog content
            if (e.clientX < rect.left ||
                e.clientX > rect.right ||
                e.clientY < rect.top ||
                e.clientY > rect.bottom) {
                dialogClose(dialog);
            }
        }
    });

    // Prevent clicks on dialog content from bubbling up
    dialog.addEventListener('click', (e) => {
        if (e.target !== dialog) {
            e.stopPropagation();
        }
    });
});


/* Move share buttons on blog post */
if (document.querySelector('.entry-header') && document.querySelector('.sharedaddy')) {
    const shareButtons = document.querySelector('.sharedaddy');
    const newPosition = document.querySelector('.entry-header');
    window.onload = (event) => {
        newPosition.appendChild(shareButtons);
    }
};

/* Search bar glossary */
const searchbar = document.querySelector('.sub-hero__search-bar-container');

if (searchbar) {
    searchbar.addEventListener('submit', e => {
        e.preventDefault();
        const text = searchbar.querySelector('input').value.toLowerCase();
        const titles = document.querySelectorAll('.glossary__item-title');
        titles.forEach(el => {
            el.parentElement.style.display = "block";
            if (!el.textContent.toLowerCase().includes(text)) {
                el.parentElement.style.display = "none";
            }
        })
    });
}

/* Make titles same height*/
let eb5Titles = document.querySelectorAll('.projects__item-title');
let eb5TitleHeight = 0;
eb5Titles.forEach(el => {
    el.style.height = '';
    eb5TitleHeight = eb5TitleHeight > el.offsetHeight ? eb5TitleHeight : el.offsetHeight;
})
eb5Titles.forEach(el => {
    el.style.height = eb5TitleHeight + 'px';
})

/* Footer WeChat modal */
const weChatBtn = document.querySelector('.footer__social-item-link:last-of-type');
const weChatCloseBtn = document.querySelector('.footer__wechat-modal-close');
const weChatModal = document.querySelector('.footer__wechat-modal');
weChatBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    weChatModal.classList.toggle('footer__wechat-modal-open');
});

document.addEventListener('click', e => {
    if (weChatModal.classList.contains('footer__wechat-modal-open')) {
        weChatModal.classList.remove('footer__wechat-modal-open');
    }
});

weChatModal.addEventListener('click', e => {
    e.stopPropagation();
})

weChatCloseBtn.addEventListener('click', e => {
    weChatModal.classList.toggle('footer__wechat-modal-open');
})

/* Latest news display items 9 at a time */

const latestNewsViewMore = document.querySelector('.latest-news__cta');
let latestNewsHiddenItems = document.querySelectorAll('.latest-news-item.hide');

if (latestNewsViewMore) {
    latestNewsViewMore.addEventListener('click', e => {
        var counter = 0;
        latestNewsHiddenItems.forEach(latestNewsHiddenItem => {
            counter++;
            if (counter <= 9) {
                latestNewsHiddenItem.classList.remove('hide');
            }
        })
        latestNewsHiddenItems = document.querySelectorAll('.latest-news-item.hide');
        e.preventDefault();
        if (latestNewsHiddenItems.length == 0) {
            latestNewsViewMore.remove();
        }
    })
};

/* Header background color news & policy page */

if (document.querySelector('.policy') ||
    document.querySelector('.post-template-default') ||
    document.querySelector('.search') ||
    document.querySelector('.archive') ||
    document.querySelector('.news-insights')) {
    var head = document.querySelector('.site-header')
    head.classList.add('scrolled');
}

/* Team nav & display */

const teamNavItems = document.querySelectorAll('.team__item-nav');
const firstTeamNavItem = teamNavItems[0];

const teamTabItems = document.querySelectorAll('.team__tab-container');
const firstTeamTabItem = teamTabItems[0];

if (firstTeamNavItem) {
    firstTeamNavItem.classList.add('team-nav-active');
}
if (firstTeamTabItem) {
    firstTeamTabItem.classList.add('team-tab-active');
}

teamNavItems.forEach((button, index) => {
    button.addEventListener('click', function() {
        for (e = 0; e < teamNavItems.length; e++) {
            teamNavItems[e].classList.remove('team-nav-active');
            teamTabItems[e] ? .classList.remove('team-tab-active');
        }
        this.classList.toggle('team-nav-active');
        teamTabItems[index] ? .classList.toggle('team-tab-active');
        window.dispatchEvent(new Event('resize'));
    });
});

const teamNavBefore = document.querySelector('.team__item-nav-before');
const teamNavAfter = document.querySelector('.team__item-nav-after');

if (teamNavAfter) {
    teamNavAfter.addEventListener('click', e => {
        e.preventDefault();
        var el = document.querySelector('.team-nav-active');
        el ? .nextElementSibling.click();
        document.querySelector('.team__nav-container').scrollLeft = el.nextElementSibling.offsetLeft - 36;
    })
}

if (teamNavBefore) {
    teamNavBefore.addEventListener('click', e => {
        e.preventDefault();
        var el = document.querySelector('.team-nav-active');
        el ? .previousElementSibling.click();
        document.querySelector('.team__nav-container').scrollLeft = el.previousElementSibling.offsetLeft - 36;
    })
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#primary-menu').classList.add('loaded');
});

// Create and append Intercom settings script




/* Video slider */

document.querySelectorAll('.video__slider__wrapper').forEach(sliderwrap => {
    let prev = sliderwrap.querySelector('.prev');
    let next = sliderwrap.querySelector('.next');
    let slider = sliderwrap.querySelector('.video__slider');
    prev.addEventListener('click', e => {
        slider.scrollLeft -= slider.offsetWidth;
        e.stopPropagation();
    })
    next.addEventListener('click', e => {
        slider.scrollLeft += slider.offsetWidth;
        e.stopPropagation();
    })
})

document.querySelectorAll('.video__container').forEach(container => {
    container.querySelectorAll('.video__subtitle').forEach(btn => {
        btn.addEventListener('click', e => {
            btn.classList.toggle('closed');
            btn.nextElementSibling.classList.toggle('closed');
        })
    })

    container.querySelector('.clear_button') ? .addEventListener('click', e => {
        container.querySelector('#search-input').value = '';
        document.querySelectorAll('.closed').forEach(closed => {
            closed.classList.remove('closed');
        })
        e.preventDefault();
    })

    container.querySelector('#search-input') ? .addEventListener('input', e => {
        let search = e.target.value;
        let results = 0;
        document.querySelectorAll('.closed').forEach(closed => {
            closed.classList.remove('closed');
        })
        document.querySelectorAll('.video__slider__wrapper').forEach(wrapper => {
            let matches = false;
            wrapper.querySelectorAll('.video__slider').forEach(el => {
                if (el.textContent.includes(search)) {
                    matches = true;
                    results++;
                }
            })
            if (!matches) {
                wrapper.previousElementSibling.click();
            }
        })
        document.querySelector('.search_wrap').setAttribute('data-num', results)
    })

})

window.addEventListener('resize', e => {
    document.querySelectorAll('.video__slider__wrapper').forEach(sliderwrap => {
        let slider = sliderwrap.querySelector('.video__slider');
        if (slider.scrollWidth <= slider.offsetWidth) {
            sliderwrap.classList.add('no-btn')
        } else {
            sliderwrap.classList.remove('no-btn')
        }
    })
});

window.dispatchEvent(new Event('resize'));

let langSwitcher = document.querySelector('.wpml-ls-native[lang="zh-hant"] + .wpml-ls-display');
if (langSwitcher ? .textContent.trim() === "(Chinese (Traditional))") {
    langSwitcher.textContent = ' Chinese (Simplified)';
}

let langNative = document.querySelector('.wpml-ls-native[lang="zh-hant"]');
if (langNative ? .textContent.trim() === "繁體中文") {
    langNative.textContent = '简体中文';
}


let wpmlActions = document.querySelector('.wpml-ls-statics-shortcode_actions');
let dropdownMenu = wpmlActions ? .querySelector('.wpml-ls-sub-menu');
let wpmlToggles = [wpmlActions, dropdownMenu];
let mouseIn = false;

wpmlToggles.forEach(el => {
    el ? .addEventListener('mouseenter', e => {
        dropdownMenu.classList.add('focus');
        mouseIn = true;
    });
});

wpmlToggles.forEach(el => {
    el ? .addEventListener('mouseleave', e => {
        mouseIn = false;
        setTimeout(function() {
            if (!mouseIn) {
                dropdownMenu.classList.remove('focus');
            }
        }, 250);
    });
});

let output = document.querySelector('.contact.eb5_visa_contact_form .wpcf7-response-output');
document.querySelector('.contact.eb5_visa_contact_form .step-3 .captcha-text') ? .insertAdjacentElement("beforebegin", output);

document.querySelectorAll('.eb5_visa_contact_form .step-3 input').forEach(input => {
    input.setAttribute('required', true);
})

document.querySelectorAll('.eb5_visa_contact_form button:not(.close), .eb5_visa_contact_form input[type="submit"]').forEach(btn => {
    btn.addEventListener('click', e => {
        let step = e.target.closest('.steps');
        let valid = validateStep(step);

        if (!valid) {
            e.preventDefault();
        }

        if (e.target.getAttribute('type') != 'submit' && valid) {
            updateStepCounter();
        }
    });
});

document.querySelector('.eb5_visa_contact_form button.close') ? .addEventListener('click', e => {
    closeWindow();
});

function validateStep(step) {
    let valid = true;

    // Validate text inputs, selects, and textareas
    step.querySelectorAll('input, select, textarea').forEach(input => {
        if (valid) {
            if (input.getAttribute('type') == 'radio' || input.getAttribute('type') == 'checkbox') {
                let name = input.getAttribute('name');
                let group = step.querySelectorAll(`input[name="${name}"]`);
                let checked = Array.from(group).some(r => r.checked);
                if (!checked) {
                    valid = false;
                    displayError(input, true);
                } else {
                    input.setCustomValidity('');
                }
            } else if (input.tagName == 'SELECT' && input.checkVisibility()) {
                if (input.value == input.querySelector('option').getAttribute('value')) {
                    valid = false;
                    displayError(input, true);
                } else {
                    input.setCustomValidity('');
                }
            } else if (!input.checkValidity()) {
                valid = false;
                displayError(input, false);
            }

        }
    });

    return valid;
}

function displayError(input, additionalText) {

    const yOffset = -200;
    const y = input.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
    setTimeout(function() {
        if (additionalText) {
            input.setCustomValidity('Please select an option');
        }
        input.reportValidity();
    }, 500);

}

function updateStepCounter() {

    let infoContainer = document.querySelector('.contact__info-container');

    if (!infoContainer.classList.contains('no-fullscreen')) {
        infoContainer.classList.add('fullscreen');
    }

    let currentEl = document.querySelector('.eb5_visa_contact_form .steps.active');
    if (currentEl.nextElementSibling) {
        currentEl.nextElementSibling.classList.add('active');
        currentEl.classList.remove('active');
    }

    infoContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    let stepCounter = document.querySelector('.step-counter');
    let steps = stepCounter.querySelectorAll('.active');
    let last = steps[steps.length - 1];

    last.nextElementSibling ? .classList.add('active');

}

document.querySelectorAll('[data-name="residing-usa"] input').forEach(input => {
    input.addEventListener('change', e => {
        let value = e.target.value.toLowerCase();
        document.querySelectorAll('.question').forEach(el => {
            el.classList.remove('active');
            el.querySelectorAll('input').forEach(_input => {
                _input.removeAttribute('required');
                _input.value = '';
                _input.setAttribute('readonly', true);
            })
        })
        document.querySelector(`.question.${value}`).classList.add('active');
        document.querySelector(`.question.${value}`).querySelectorAll('input').forEach(_input => {
            _input.setAttribute('required', true);
            _input.removeAttribute('readonly');
        })
    });
})

document.addEventListener('wpcf7mailsent', function(event) {
    closeWindow();
}, false);

document.querySelector('[data-name="residing-usa"] input') ? .click();

function closeWindow() {
    let eb5visaContainer = document.querySelector('.contact__info-container');
    if (eb5visaContainer) {
        eb5visaContainer.classList.remove('fullscreen');
        eb5visaContainer.classList.add('no-fullscreen');
        window.scrollTo({
            top: eb5visaContainer.offsetTop - 200,
            behavior: 'smooth'
        });
    }
}

/*live search*/

let openSearch = document.querySelector('.openSearch');
let closeSearch = document.querySelector('.close_button');
openSearch.addEventListener('click', e => {
    document.querySelector(openSearch.getAttribute('href')).classList.toggle('open');
    document.body.classList.toggle('scroll-none');
    e.preventDefault();
});
closeSearch.addEventListener('click', e => {
    openSearch.click();
});

const liveSearchInput = document.getElementById('live-search-input');
const liveLangInput = document.getElementById('live-lang-input');
const liveClearInput = document.getElementById('live-clear-input');
const resultsContainer = document.getElementById('live-search-results');

liveClearInput.addEventListener('click', e => {
    liveSearchInput.value = '';
    resultsContainer.innerHTML = '';
    e.preventDefault();
})

// Declare delayTimer outside the event listener to persist between calls
let delayTimer;

liveSearchInput.addEventListener('input', function() {
    const query = liveSearchInput.value;
    const lang = liveLangInput.value;

    if (query.length > 2) {

        resultsContainer.innerHTML = `<p>${resultsContainer.dataset.searching}</p>`;

        // Clear the previous timer to debounce the input
        clearTimeout(delayTimer);

        // Set a new timer to make the AJAX call after a delay
        delayTimer = setTimeout(function() {
            fetch(`${ajaxurl}?action=live_search&s=${encodeURIComponent(query)}&lang=${encodeURIComponent(lang)}`)
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => {
                            throw new Error(`HTTP error ${response.status}: ${text}`);
                        });
                    }
                    return response.text();
                })
                .then(data => {
                    if (data == '') {
                        data = `<p>${resultsContainer.dataset.results}</p>`;
                    }
                    resultsContainer.innerHTML = data;
                })
                .catch(error => {
                    console.error('Fetch operation error:', error.message);
                    console.error('Detailed error information:', error);
                });
        }, 500); // Delay time in milliseconds

    } else {
        resultsContainer.innerHTML = '';
    }
});

if (window.location.hash) {
    let hash = window.location.hash;
    let faqQuestion = document.querySelector(hash);
    if (faqQuestion) {
        window.dispatchEvent(new CustomEvent('scroll'))
        faqQuestion.classList.add('active');
    }
}

document.querySelectorAll('.faq-question-text .share-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        navigator.clipboard.writeText(href).then(function() {
            const originalText = link.querySelector('span').innerText;
            link.querySelector('span').innerText = 'Link Copied!';
            setTimeout(function() {
                link.querySelector('span').innerText = originalText;
            }, 1000);
        })

    });
})