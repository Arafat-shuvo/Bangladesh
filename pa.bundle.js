// Configuration object for websites and their elements to hide
const hideConfig = {
    "https://app.vyond.com/*": [
        '.menu-item.TopBar_menuItem__AUQXo.TopBar_right__coJaz',
        '.topbar__status'
    ],
    "https://quillbot.com/*": [
        '.MuiToolbar-root.MuiToolbar-regular.css-ritaun'
    ],
    "https://hix.ai/*": [
        '.coco-popover-open',
		'.gap-2',
		'.p-3'
    ],	
	    "https://www.scribbr.com/ai-detector/": [
        '.site-header',
		'.footer',
		'section#educational-content',
		'.col-12',
		'div#faqCTA',
		'.col-lg-12',
		'section#academic-integrity',
		'section#ai-detector-vs-plagiarism-checker',
		'section#benefits',
		'section#supported-ai-models',
		'section#use-cases',
		'.blockfasf'
    ],
	
		    "https://scribbr.com/*": [
        '.site-header.block'
    ],

    "https://phrasly.ai/*": [
        '.flex.pt-4',
		'.text-left',
		'.text-gray-500.font-medium.hover\:text-blue-600.hover\:bg-blue-400\/10.hover\:dark\:bg-blue-500\/20.hover\:dark\:text-blue-500.group.flex.items-center.gap-x-3.transition.rounded-xl.px-3.py-2.text-sm.font-medium.leading-6',
		'.py-1'
    ],

    "https://copymatic.ai/*": [
        '.navbar.navbar-top',
        '.navbar-menu-wrapper.d-flex.align-items-stretch',
        '.left-lower-menu'
    ],
    "https://vecteezy.com/*": [
        '.ez-drop-down',
        '.ez-drop-down.ez-site-header__submenu-wrapper.ez-site-header__user-menu.is-closed',
        '.ez-avatar-wrapper',
        '.ez-avatar.ez-avatar--small',
        '.ez-site-header__mobile-menu',
        '.ez-site-header__submenu-wrapper.ez-site-header__user-menu'
    ],
    "https://app.jasper.ai/*": [
        '.px-4.pt-4.pb-5.space-y-3',
        '#launcher'
    ],
    "https://canva.com/*": [
        '.IMy50w.a6f7yQ.EOPyDg',
        '.XDkc_A',
        '.R3lH9w.DwB3TQ'
    ],
    "https://app.grammarly.com/*": [
        '._36fcb0a4-index_navigation-account',
        '._6d821727-index_navigation-help',
        '._450061de-index_navigation-logout'
    ],
    "https://app.copy.ai/*": [
        '#headlessui-menu-button-2',
        '.border-t.border-grey-200.p-3.pb-4',
        '.intercom-launcher-frame',
        '#headlessui-menu-button-16'
    ],
    "https://app.smodin.io/*": [
        '.MuiBox-root.css-mrkov2',  // Element to hide
        '.MuiBox-root.css-rerbwn'   // Element to hide
    ],
    "https://studio.invideo.io/dashboard": [
        '#fresh-chat-custom', // Element to hide
        '.iv-relative .iv-avatar-link', // Additional element to hide
        '.iv-pb-[12px].iv-text-body-2xl.iv-font-semibold' // Element to replace text
    ],
    "https://app.wordtune.com/*": [
        'nav.flex.items-center.justify-between.gap-2.flex-row-reverse' // Element to hide
    ],
    "https://www.spamzilla.io/*": [
        'nav.sidebar > ul > li:not(:nth-child(4))' // Hide all except "Export" (4th item)
    ],
    "https://www.canva.com/*": [
        '.R3lH9w.DwB3TQ', // Selector for the first set of elements to hide
        '.pvf_dg.DwB3TQ' // Selector for the second set of elements to hide
    ],
    "https://app.vidiq.com/*": [
        '.intercom-button.css-rgax4w', // Selector for the first element to hide
        '#menu-button-9' // Selector for the second element to hide
    ],
    "https://analytics.moz.com/*": [
        '.info.alert-page', // Selector for the first element to hide
        '.mgn-nav-extra' // Selector for the second element to hide
    ],
    "https://analytics.moz.com/*": [
        '.info.alert-page', // Selector for the first element to hide
        '.mgn-nav-extra' // Selector for the second element to hide
    ],
    "https://you.com/*": [
        '.user-profile-button', // Selector for the first element to hide
        '.mgn-nav-extra' // Selector for the second element to hide
    ],
    "https://answerthepublic.com/*": [
        '.setting_dropdown_container', // Element to hide
        '.search-wrapper .dashboard_search__icon' // Hide specific search icon
    ]
};

// Function to hide elements by selectors
function hideElements(selectors) {
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.style.display = 'none';
            console.log(`Hid element with selector: ${selector}`);
        });
    });
}

// Function to replace text in elements and style it
function replaceText(selector, oldText, newText, color = 'black', fontWeight = 'normal') {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        if (element.textContent.includes(oldText)) {
            element.textContent = newText;
            element.style.color = color;
            element.style.fontWeight = fontWeight;
            console.log(`Replaced text "${oldText}" with "${newText}" in element: ${selector}`);
        }
    });
}

// Function to check the current URL and apply the hideElements and replaceText functions accordingly
function applyConfig() {
    const currentUrl = window.location.href;
    console.log(`Current URL: ${currentUrl}`);

    Object.keys(hideConfig).forEach(urlPattern => {
        const regex = new RegExp(urlPattern.replace(/\*/g, '.*'));
        if (regex.test(currentUrl)) {
            console.log(`Matched URL pattern: ${urlPattern}`);
            hideElements(hideConfig[urlPattern]);

// Specific text replacement for app.copy.ai
if (urlPattern === "https://app.copy.ai/*") {
    document.querySelectorAll('h2.line-clamp-1').forEach(element => {
        element.textContent = 'Toolzbuy Tool';
    });
}


            // Specific text replacement for app.jasper.ai
            if (urlPattern === "https://app.jasper.ai/*") {
                replaceText('.flex.items-center h1.font-heavy.text-h3', 'Home', 'Toolzbuy Jasper Access', 'red', 'bold');
            }

            // Specific text replacement for app.smodin.io
            if (urlPattern === "https://app.smodin.io/*") {
                replaceText('.MuiBox-root.css-fv0y2o .MuiTypography-root.MuiTypography-body1.css-20y2yg', 'Apps', 'Toolzbuy Smodin Access', 'red', 'bold');
            }

            // Specific text replacement for studio.invideo.io
            if (urlPattern === "https://studio.invideo.io/dashboard") {
                replaceText('.iv-pb-[12px].iv-text-body-2xl.iv-font-semibold', 'Create new video', 'Toolzbuy Invideo Access', 'red', 'bold');
            }
                        // Specific text replacement for answerthepublic.com
            if (urlPattern === "https://answerthepublic.com/*") {
                replaceText('.dashboard_search__form', 'Dashboard', 'Using it from Toolzbuy', 'blue', 'bold');
            }

            // Specific text replacement for spamzilla footer
            if (urlPattern === "https://www.spamzilla.io/*") {
                replaceText('.footer .pull-left', '© SpamZilla 2024', 'You are using Toolzbuy Tools');
            }
        }
    });
}

// Observe changes in the DOM and apply configurations dynamically
function observeMutations() {
    const observer = new MutationObserver(() => {
        applyConfig();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Also run the function once when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', applyConfig);
}

// Start observing mutations and apply initial config
observeMutations();
applyConfig();

// Re-apply configurations when the URL changes
let lastUrl = location.href;
new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        console.log(`URL changed to: ${currentUrl}`);
        applyConfig();
    }
}).observe(document, {subtree: true, childList: true});

// Listen for tab updates and re-inject the script
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['hide_elements.js']
        });
    }
});
