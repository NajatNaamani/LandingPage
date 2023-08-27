/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// ensures that the JS code is executed  after the HTML content has been loaded
document.addEventListener("DOMContentLoaded", function () {
	
// build the nav
for(let i=0; i < headings.length; i++){
	const navItem = document.createElement('li');
	const navLink = document.createElement('a');
	navLink.textContent = headings[i].textContent;
	navLink.href = '#' + sections[i].id;
	navLink.classList.add("menu__link");
	navItem.appendChild(navLink);
	NavMenu.appendChild(navItem);
	
	//Add event for scrolling to the clicked section
	 navLink.addEventListener("click", function (event) {
     event.preventDefault();
     sections[i].scrollIntoView({ behavior: "smooth" });
   });
}

});
/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const headings = document.querySelectorAll('section > div > h2');
const NavMenu = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
   // Function to calculate whether the section is in the viewport
  function isElementInVP(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight) &&
      rect.right <= (window.innerWidth)
    );
	
  }

//set the class section in viewport as active
  function updateActiveSection() {
	  const NavMenuItems = document.querySelectorAll('#navbar__list > li');
    sections.forEach((section, current) => {
      if (isElementInVP(section)) {
		  for(let i=0; i < sections.length ; i++){
		  sections[i].classList.remove("active");
		  NavMenuItems[i].classList.remove("menuactive");}
		  sections[current].classList.add("active");
		  NavMenuItems[current].classList.add("menuactive");
      }
    });
  }

  // Call the updateActiveSection function on scroll
  window.addEventListener("scroll", updateActiveSection);
  
  // Call the updateActiveSection function on page load
  updateActiveSection();
  
