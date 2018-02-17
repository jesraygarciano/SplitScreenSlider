document.addEventListener('DOMContentLoaded', function(){
	let wrapper = document.getElementById('wrapper');
	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.overlay');
	let skew = 0;
	let delta = 0;

});

	if(wrapper.className.indexOf('skewed') != -1){
		skew = 1000;
	}

	wrapper.addEventListener('mousemove', function(e){
		// delta = (e.clientX);
		console.log(e.clientX);
	});