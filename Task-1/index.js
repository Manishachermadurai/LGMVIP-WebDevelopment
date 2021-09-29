var slideIndex = 0;

showSlide();

var slideContainer = document.getElementById('slideshow_container');
var slideControl = document.getElementById('slide_control');

slideContainer.onmouseover = function() {
	clearInterval(timer);
}

slideControl.onmouseover = function() {
	clearInterval(timer);
}

slideContainer.onmouseleave = function() {
	// timer = setInterval(showSlide, 2000);
}

slideControl.onmouseleave = function() {
	// timer = setInterval(showSlide, 2000);
}

function showSlide() {
	var i;
	var slides = document.getElementsByClassName('slide_item');
	var dots = document.getElementsByClassName('dot');
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slideIndex++;
	if (slideIndex > slides.length) slideIndex = 1;
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

function chooseSlide(n) {
	slideIndex = n;
	showSlide();
	clearInterval(timer);
}

function showMenu() {
	var topNav = document.getElementById('topnav');
	if (topNav.className === "navbar") {
		topNav.className += " show";
	} else {
		topNav.className = "navbar";
	}
}


//slider2


//getting all required elements
const gallery  = document.querySelectorAll(".gallery-image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 
}


const wrapper = document.querySelector('.testimonial-wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})