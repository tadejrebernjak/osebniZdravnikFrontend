var image = document.getElementById('hallway-image');
new simpleParallax(image, {
    scale: 2.0,
    overflow: true,
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'down'
});