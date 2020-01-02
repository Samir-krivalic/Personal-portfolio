// Selecting DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menuBtn

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set menu this.state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set menu this.state
    showMenu = false;
  }
}

function display(){
	var sl =this.getAttribute('src');
	current.setAttribute('src',sl);
}

function sleep (){
i++;
		if (i > 1){
			i = 0;
		ar = makeText();
		}
		scroll.innerHTML = "";
		start();
}
function makeText (){
var text = 'Code.. Eat.. Sleep..';
var text1 = 'REPEAT!!';


var stext = text.split('');
var stext1 = text1.split('');

var nasArray = [stext,stext1];
return nasArray;
}

var ar = makeText();
var loop;
var scroll = document.getElementById('scroll')

var i = 0;


function start (){
	if(ar[i].length > 0){
		scroll.innerHTML += ar[i].shift();
        loop = setTimeout(start,100);
	}else{
		var sl = setTimeout (sleep,1000);
	}
}
start();
