document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll(".all")[0].addEventListener("click", function() {
		document.getElementById("mobile-nav").classList.add("active");
		document.querySelector("html").style.overflow = "hidden"
	}, false);
	document.getElementById("close-nav").addEventListener("click", function() {
		document.getElementById("mobile-nav").classList.remove("active");
		document.querySelector("html").style.overflow = "revert-layer"
	}, false);
});
