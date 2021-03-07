const seccionesPagina = new fullpage('#fullpage',{
		 autoScrolling: true,
		 easing: 'easeInOutCubic',
		 scrollingSpeed: 700,
		 css3: true,
		 easingcss3: 'ease-out',
		 loopBottom: true,
         navigation: false,
		 menu: '#menu',
         anchors: ['inicio', 'catalogo', 'contacto'],
});