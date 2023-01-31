<script lang="ts">
	import { onMount } from 'svelte';
	import maplibre, { NavigationControl, Marker, Popup } from 'maplibre-gl';
	import venues from '../../data/venues.json';
	import SvelteSeo from 'svelte-seo';
	let map: maplibregl.Map;
	let mapElement;
	let isMounted = false;
	let isReady = false;
	let selectedPlace: any;
	let isLoading = true;
	let showExplainer = true;

	let colors = {
		venue: '#FF6D6D',
		festival: '#26efc4',
		bar: '#EFCC24',
		restaurant: '#76BB69',
		studio: '#6977BB'
	};

	// extend mapboxGL Marker so we can pass in an onClick handler
	class ClickableMarker extends Marker {
		setPlace(place: any) {
			this.place = place;
			return this;
		}
		// new method onClick, sets _handleClick to a function you pass in
		onClick(handleClick) {
			this._handleClick = handleClick;
			return this;
		}

		showPopupOnHover() {
			this._element.addEventListener('mouseenter', () => {
				if (selectedPlace !== this.place && !this.getPopup().isOpen()) {
					this.togglePopup();
				}
			});
			this._element.addEventListener('mouseleave', () => {
				if (selectedPlace !== this.place && this.getPopup().isOpen()) {
					this.togglePopup();
				}
			});
			return this;
		}

		// the existing _onMapClick was there to trigger a popup
		// but we are hijacking it to run a function we define
		_onMapClick(e) {
			const targetElement = e.originalEvent.target;
			const element = this._element;

			if (this._handleClick && (targetElement === element || element.contains(targetElement))) {
				this._element.classList.add('selected');
				this._handleClick();
			} else {
				this._element.classList.remove('selected');
			}
		}
	}

	function init() {
		console.log('initing');
		map = new maplibre.Map({
			container: 'map',
			style:
				'https://api.maptiler.com/maps/0f4a38e3-a830-4fa6-8d8d-0a745f993b06/style.json?key=GcUcBeo8aBFeRFp7EqoL', // stylesheet location
			center: [-4.8807, 36.4934], // starting position [lng, lat]
			zoom: 9.5, // starting zoom,
			trackResize: true
		});

		map.on('load', function () {
			map.resize();
			loadData();
			isLoading = false;
		});
	}

	function loadData() {
		map.addControl(new NavigationControl({ showZoom: true }));
		// Set options
		var markerHeight = 50,
			markerRadius = 10,
			linearOffset = 25;

		venues.forEach((venue) => {
			new ClickableMarker({
				color: venue.category !== undefined ? colors[venue?.category] : '#FFFFFF'
			})
				.setPopup(
					new Popup().setHTML(`
                <div>
                    <h1 class="popup-title">
                        ${venue.name}
                    </h1>
                    <h2 class="popup-description">${venue.description}</h2>
					<p>Click para más detalles</p>
                </div>`)
				) // add popup
				.setLngLat([venue.pos.lng, venue.pos.lat])
				.addTo(map)
				.setPlace(venue)
				.showPopupOnHover()
				.onClick(() => {
					selectedPlace = venue;
				});
		});
	}

	function onMapLoad() {
		console.log('map loaded');
		isReady = true;
	}

	let w;
	let h;

	onMount(() => {
		w = window.innerWidth;
		h = window.innerHeight;
		console.log('mounted');
		isMounted = true;
		init();
	});
</script>

<SvelteSeo
	title="Música en la Costa del Sol"
	description="Un mapa interactivo de la nueva escena musical en la Costa del Sol, para bandas locales y los que buscan cultura alternativa."
	openGraph={{
		title: 'Música en la Costa del Sol',
		description:
			'Un mapa interactivo de la nueva escena musical en la Costa del Sol, para bandas locales y los que buscan cultura alternativa.',
		url: `https://unclejohnsband.xyz/costadelsol`,
		type: 'website',
		images: [
			{
				url: '/og.webp',
				width: 850,
				height: 650,
				alt: 'band'
			}
		]
	}}
/>

<svelte:head>
	<link href="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css" rel="stylesheet" />
</svelte:head>

<div class="container">
	<div
		id="map"
		class:loading={isLoading}
		bind:this={mapElement}
		style="width: {w}px; height: {h}px"
	/>
	{#if isLoading}
		<div class="loading">
			<img src="/map/DRUM.GIF" />
			<h2>Cargando mapa...</h2>
		</div>
	{/if}
	<div class="toolbar">
		<p class="label" />
		<div>
			<h1>Música en la Costa</h1>
			<h2>Guía para bandas locales</h2>
		</div>
		<p />
	</div>

	{#if selectedPlace}
		<div class="info">
			<h2>{selectedPlace.name}</h2>
			<div>
				<p>{selectedPlace.description}</p>
				{#if selectedPlace.jam}
					<p>✅ jam sessions</p>
				{/if}
				{#if selectedPlace?.links}
					<span class="links">
						{#each selectedPlace.links as link}
							<a href={link.url}>{link.type}</a>
						{/each}
					</span>
				{/if}
			</div>
		</div>
	{/if}

	<div class="legend">
		{#if showExplainer}
			<p>
				Illo! Hemos creado esta página para ayudar a bandas emergentes y artistas locales a
				encontrar sitios donde actuar. <br />Sabemos que el tema de la música por la Costa es algo
				lamentable, y queríamos contribuir algo a mejorar la situación. Esperamos que os sirva de
				ayuda 🤘
			</p>
			<small class="signed">- Uncle John's Band</small>
			<button
				on:click={() => {
					showExplainer = false;
				}}>OK</button
			>
			<br />
		{/if}
		<p class="legend-label">Leyenda</p>
		<span>
			<div class="circle" style="background-color: {colors['bar']};" />
			<p>Bar</p>
		</span>
		<span>
			<div class="circle" style="background-color: {colors['venue']};" />
			<p>Sala de conciertos</p>
		</span>
		<span>
			<div class="circle" style="background-color: {colors['festival']};" />
			<p>Festival</p>
		</span>
		<span>
			<div class="circle" style="background-color: {colors['restaurant']};" />
			<p>Restaurante</p>
		</span>
		<span>
			<div class="circle" style="background-color: {colors['studio']};" />
			<p>Estudio</p>
		</span>
	</div>
</div>

<style lang="scss">
	.container {
		position: relative;

		.toolbar {
			position: absolute;
			top: 0;
			width: 100%;
			display: grid;
			grid-template-columns: 250px 1fr 250px;
			padding: 1em;

			@media only screen and (max-width: 500px) {
				grid-template-columns: 0px 1fr 0px;
			}

			div {
				margin: 0 auto;
				display: flex;
				flex-direction: column;
				align-items: center;

				* {
					margin: 0;
				}
				h2 {
					/* background-color: #3a3939; */
					padding: 0 0.5em;
					/* color: aliceblue; */
				}
			}
		}

		.loading {
			position: absolute;
			height: 100vh;
			width: 100vw;
			margin: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: -1;
		}
		#map {
			position: absolute;
			height: 100%;
			width: 100%;
			opacity: 1;
			z-index: 0;
			transition: opacity 0.5s ease-in-out;

			&.loading {
				opacity: 0;
			}
			/* Change the cursor to a pointer on hover so the user knows it's clickable */
			:global(.mapboxgl-marker:hover) {
				cursor: pointer;
			}
			:global(.mapboxgl-marker.selected svg > g > g:nth-child(2)) {
				fill: #000000 !important;
			}

			/* darken the marker on hover */
			:global(.mapboxgl-marker:hover svg > g > g:nth-child(2)) {
				fill: #7993a5;
			}

			:global(.maplibregl-popup) {
				max-width: 350px !important;
			}

			:global(.popup-title) {
				margin: 0;
				font-family: 'Times New Roman', serif;
			}

			:global(.popup-description) {
				margin: 0;
				margin-top: 1em;
				color: rgb(199, 193, 193);
			}
			:global(.maplibregl-popup-tip) {
				border-top-color: #3a3939;
			}

			:global(.mapboxgl-popup-content) {
				background: #3a3939;
				color: white;
				padding: 1em 2.4em;
				/* border: 3px solid rgba(255, 255, 255, 0.116); */
			}

			:global(.maplibregl-popup-close-button) {
				padding: 10px;
				color: rgb(139, 134, 134);
				font-size: 1.4em;
			}
		}

		:global(.mapboxgl-canvas) {
			position: relative;
			left: 0;
			top: 0;
		}

		.info {
			position: fixed;
			bottom: 1em;
			right: 1em;
			width: 350px;
			z-index: 10;
			border-radius: 2px;
			@media only screen and (max-width: 600px) {
				max-width: 100vw;
			}
			display: block;
			padding: 0.5em 1em;
			color: white;

			h2 {
				font-weight: bold;
				color: #24efc4;
				background-color: #3a3939;
				padding: 0.5em 1em;
			}
			.links {
				display: flex;
				flex-direction: row;
				gap: 10px;
			}
			span {
				width: 100%;
				display: block;
			}
			div {
				background-color: #3a3939;
				padding: 0.5em 1em;
			}
			p,
			span {
				padding: 0.2em 0.5em;
				margin: 5px 0;
			}
		}

		.legend {
			position: fixed;
			bottom: 1em;
			left: 1em;
			display: block;
			background-color: #3a3939;
			padding: 0.5em 1em;
			color: white;
			max-width: 350px;
			> .legend-label {
				margin: 0;
				width: 100%;
				text-align: center;
				color: rgb(143, 143, 139);
			}
			.signed {
				float: right;
				top: 0em;
				position: relative;
			}
			span {
				display: inline-flex;
				vertical-align: middle;

				div {
					margin: auto 0;
				}
				p {
					margin: 0 0.5em;
				}
			}

			.circle {
				width: 10px;
				height: 10px;

				&.venue {
					background-color: #ff0000;
				}

				&.bar {
					background-color: #ff0000;
				}

				&.festival {
					background-color: #24efc4;
				}
			}
		}
	}
</style>
