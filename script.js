(function () {
	const canvasElement = document.getElementById('canvas')
	const context = canvasElement.getContext('2d')

	canvasElement.width = 500
	canvasElement.height = 500

	update()
	function update() {
		requestAnimationFrame(update)
	}
	
})()