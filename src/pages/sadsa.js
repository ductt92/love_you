// This code is a remake of https://codepen.io/alvaromontoro/pen/GRNmdzB
// Thanks Alvaro!  Nice code for HTML(PUG) SCSS.
// We remade the snow the same here https://codepen.io/zimjs/pen/Yzvbvvp 
// and we add more features in this pen 
// We make the smaller snow darker and move more slowly 
// We also wiggle the the registration and rotation  
// to give a slight wind or floating motion
// and we use a six-sided Poly rather than a circle

// There is an even more complete version here
// https://zimjs.com/particles/snowflakes.html
// where we use an Emitter that emits custom snowflakes!

import zim from "https://zimjs.org/cdn/01/zim";

// see https://zimjs.com
// and https://zimjs.com/learn
// and https://zimjs.com/docs

new Frame(FILL, 1024, 768, black, black, ready);
function ready() {

	// given F (Frame), S (Stage), W (width), H (height)
    // put your code here
	
	new Page(W,H,"#123","#111").addTo();
	
	loop(50, i=>{
		let x = rand(W);
		let rMin = 5;
		let rMax = 15;
		let r = rand(rMin, rMax);
		// we will make farther away (smaller) snowflakes be darker
		// if at the smallest radius it will be darkened by .5 
		// if at the largest radius it will be darkened by 0
		// we could calculate this, but ZIM has Proportion to make it easy
		let colorDarken = new Proportion(rMin, rMax, .5, 0);
		let color = white.darken(colorDarken.convert(r));
		let flake = new Poly(r, 6, .9, color, color, rand(2,6))
			.loc(x,-100)
			.animate({
				props:{
					x:x+rand(-100,100), 
					y:H+100
				},
				time:30-r,
				ease:"linear",
				loop:true
			})
		flake.percentComplete = rand(100);
		flake.wiggle("regX",10,100,3,10)
		flake.wiggle("rotation",10,100,3,10);
		let blur = rand(8);
		flake.effect(new BlurEffect(blur, blur));		
		
	})
	
	
	const logo = F.madeWith(silver,null,null,clear);
	F.on("resize", ()=>{logo.loc(F.visibleRight-100,F.visibleBottom-100);})
	
} // end ready