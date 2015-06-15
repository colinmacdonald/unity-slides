#pragma strict

public var currentIndex : int = 0;
private var previousIndex : int = currentIndex;
private var currentSlide : GameObject;
private var slides : Array = new Array();

function Awake () {
	// Store a ref to all the slides
	for(var child : Transform in transform) {
		child.gameObject.SetActive(false);
		slides.push(child.gameObject);
	}
	
	// Activate the first slide
	currentSlide = slides[currentIndex];
	currentSlide.SetActive(true);
}

function Update () {
	if (Input.GetKey(KeyCode.RightArrow)) {
		previousIndex = currentIndex;
		currentIndex += 1;
	}
	
	if (Input.GetKey(KeyCode.LeftArrow)) {
		previousIndex = currentIndex;
		currentIndex -= 1;
	}
}

function ActivateSlide () {
	currentSlide.SetActive(false);
	currentSlide = slides[currentIndex];
	currentSlide.SetActive(true);
}