/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

const siteNavigation = document.getElementById('site-navigation');
const siteBranding = document.getElementById('site-branding');
const headerContainer = document.getElementById('masthead');
const menu = siteNavigation.getElementsByTagName('ul')[0];
const button = siteNavigation.querySelector('.menu-toggle span');

// Toggle the .toggled class and the aria-expanded value each time the button is clicked.
button.addEventListener('click', function() {
    siteNavigation.classList.toggle('toggled');
    siteBranding.classList.toggle('toggled');

    if (button.parentElement.getAttribute('aria-expanded') === 'true') {
        button.parentElement.setAttribute('aria-expanded', 'false');
        headerContainer.classList.remove('mobile-open');
    } else {
        button.parentElement.setAttribute('aria-expanded', 'true');
        headerContainer.classList.add('mobile-open');
    }
});

// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
document.addEventListener('click', function(event) {
    const isClickInside = siteNavigation.contains(event.target);

    if (!isClickInside) {
        siteNavigation.classList.remove('toggled');
        siteBranding.classList.remove('toggled');
        button.parentElement.setAttribute('aria-expanded', 'false');
    }
});

// Get all the link elements within the menu.
const links = menu.getElementsByTagName('a');

// Get all the link elements with children within the menu.
const linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

// Toggle focus each time a menu link is clicked.
for (const link of links) {
    link.addEventListener('click', e => {
        if (link.href.indexOf('#') !== -1) {
            let fragmentIdentifier = link.href.split('#')[1];
            console.log(fragmentIdentifier);
            let targetElement = document.getElementById(fragmentIdentifier);
            console.log(targetElement);
            if (targetElement) {
                document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                    img.removeAttribute('loading');
                })
                button.click();
            }
        } else {
            link.parentElement.classList.toggle('focus');
        }
    });
}

document.querySelector('.nav-menu > .menu-item:last-of-type a').addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    dialogOpen(document.querySelector('#contact-popup'));
    if (document.querySelector('header').classList.contains('mobile-open')) {
        button.click();
    }
})