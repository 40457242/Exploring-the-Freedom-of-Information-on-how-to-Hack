//<< NAV VARIABLES >>
const sideNav = document.getElementById("sidenav");
const menuIcon = document.getElementById("menu-icon");
var navOpen = false;

//<< FUNCTIONS >>
// NAV
function navToggle()
{//toggles the nav bar open and closed
  if (navOpen)
  {//The menu is open, so close it
    sideNav.style.width = "0";
    menuIcon.src = "images/openMenu.png";
    navOpen = false;
  }
  else
  {//The menu is closed, so open it
    sideNav.style.width = "250px";
    menuIcon.src = "images/closeMenu.png";
    navOpen = true;
  }
}
