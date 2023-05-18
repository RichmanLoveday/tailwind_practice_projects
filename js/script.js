const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabclick));


// Hamburger button listener
btn.addEventListener('click', navToggle);

function onTabclick(e) { // Deactivate all tab
    if (e.target.classList.contains('tab')) 
        return;
    


    tabs.forEach((tab) => {
        tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0');
    })

    // Hide all panels and disaplay correct panel
    panels.forEach((panel) => {
        panel.classList.add('hidden');
    })

    // Activate new tab and panel based on the target
    e.target.classList.add('border-softRed', 'border-b-4');

    // display panel
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels').getElementsByClassName('panel-2')[0].classList.remove('hidden')


}


function navToggle(e) {
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');

    if (! menu.classList.contains('hidden')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    } else {
        logo.setAttribute('src', './images/logo-bookmark.svg')

    }
}
