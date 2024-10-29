const slides = ['slide354', 'slide355', 'slide356', 'slide357']

$(document).ready(function () {
	// modal
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
		localStorage.setItem('slide354', 'true')
		$('.puntero').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 4) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 1
	$('.openModal1').on('click', () => {
		$('.modal1').css('display', 'block')
        localStorage.setItem('slide355', 'true')
		$('.puntero1').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 4) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal1
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 2
	$('.openModal2').on('click', () => {
		$('.modal2').css('display', 'block')
        localStorage.setItem('slide356', 'true')
		$('.puntero2').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 4) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal2
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	// modal 3
	$('.openModal3').on('click', () => {
		$('.modal3').css('display', 'block')
        localStorage.setItem('slide357', 'true')
		$('.puntero3').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 4) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal3
	$('.closeModal3').on('click', () => {
		$('.modal3').css('display', 'none')
	})

	$('#play-video').on('click', () => {
		$('.boton-play').on('click', () => {
			$('.play-boton-10').hide()
			localStorage.setItem('slide354', 'true')
			$('.cursor').hide()
			$('.boton-next').show()
			$('.reproduc').show()
			$('.vutom-col').hide()
		})
	})
})
