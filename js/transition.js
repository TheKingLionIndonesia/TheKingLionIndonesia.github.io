barba.init({
	transitions: [
		{
			leave(data) {
				return new Promise(resolve => {
					anime({
					  targets: '#brand img',
					  translateX: 250,
					  complete: function(anim) {
					  	resolve();
					  }
					});
				})
			},
			enter(data) {
				anime({
				  targets: '#brand img',
				  translateX: [250, 0],
				  delay: 1000
				});
			}
		}
	]
});
