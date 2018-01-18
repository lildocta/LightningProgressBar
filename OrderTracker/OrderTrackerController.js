({
	doInit : function(component, event, helper) {

	},

	animate2 : function(component, event, helper){
		component.set("v.disableButton", true);
		var animationDistance = component.get("v.animationDistance");
		var animationDuration;
		if(animationDistance == 0.25){
			animationDuration = 1800;
		} else if(animationDistance == 0.50){
			animationDuration = 4000;
		} else if(animationDistance == 0.75){
			animationDuration = 5400;
		} else if(animationDistance == 1.0){
			animationDuration = 7200;
		}

		var bar = new ProgressBar.SemiCircle(container, {
		  strokeWidth: 4,
		  color: '#006338',
		  trailColor: '#eee',
		  trailWidth: 1,
		  duration: animationDuration,
		  svgStyle: null,
		  easing: 'easeInOut',
		  text: {
		    value: '',
		    alignToBottom: false
		  },
		  from: {color: '#006338'},
		  to: {color: '#2ecc71'},
		  // Set default step function for all animate calls
		  step: (state, bar) => {
		    bar.path.setAttribute('stroke', state.color);
		    var value = Math.round(bar.value() * 100);
		    if (value === 0) {
		    	bar.setText('');
		    } else if (value <= 25){
		    	bar.setText('Processing');
		    } else if (value <= 50){
		    	bar.setText('Shipping');
		    } else if (value <= 99){
		    	bar.setText('Installing');
		    } else if (value == 100){
		    	bar.setText('Complete');
		    }

		    bar.text.style.color = state.color;
		  }
		});
		bar.text.style.fontSize = '2rem';

		bar.animate(animationDistance);  // Number from 0.0 to 1.0
	},
	
})