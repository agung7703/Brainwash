// DROPDOWN
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu');
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon');
    })
}

showMenu('nav-toggle','nav-menu')

// SHOW SCROLL UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // If screen height is greater than 350px, show the scroll up button
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
