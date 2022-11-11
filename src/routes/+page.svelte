<script lang="ts">
	import YoutubeVideo from '../components/YoutubeVideo.svelte';
	import { t, loading, locale } from '../lib/translations';
	import SvelteSeo from 'svelte-seo';

	export let data;
</script>

<SvelteSeo
	title="Uncle John's Band"
	description="Jamming since 2022"
	openGraph={{
		title: "Uncle John's Band",
		description: "Jamming since 2022",
		url: `https://unclejohnsband.xyz`,
		type: 'website',
		images: [
			{
				url: 'og.webp',
				width: 850,
				height: 650,
				alt: 'band'
			}
		]
	}}
/>

{#if $loading}
	<p>wait</p>
{:else}
	<container>
		<div class="nav">
			<div class="title">
				<h1>Uncle John's Band</h1>
				<p>{$t('home.subtitle')}</p>
			</div>
			<div class="line" />
			<p>{$t('home.tagline')}</p>
			<div class="line" />
			<div class="language">
				<a href="?lang=en"> EN </a>
				<p>/</p>
				<a href="?lang=es">ES</a>
			</div>
		</div>

		<div class="sections">
			<div class="grid">
				<img class="img-1" src="band-media/calling.webp" />
				<img class="img-2" src="band-media/flower-power.webp" />
				<img class="img-3" src="band-media/studio-1.webp" />

				<div class="text-divider">
					<p>people come, people go</p>
					<div class="page-divider" />
					<p>people laugh, people cry</p>
					<div class="page-divider" />
					<p>sometimes they look at each other</p>
					<div class="page-divider" />
					<p>and not know what to say</p>
				</div>

				<section class="dates">
					<h2>✼ {$t('home.shows.title')}</h2>
					<table>
						<th>{$t('home.shows.date')}</th>
						<th>{$t('home.shows.location')}</th>
						<th>{$t('home.shows.tickets')}</th>
						{#each data.shows as show}
							<tr>
								<td class:passed={show.passed}>{show.date}</td>
								<td>{show.location}</td>
								<td>{show.tickets}</td>
							</tr>
						{/each}
					</table>
				</section>

				<section class="contact">
					<p>{$t('home.booking')} ☞ elpatostudios@protonmail.com</p>
					<a href="https://instagram.com/unclejohns.band">instagram.com/unclejohns.band</a>
					<br />
					<small>© El Pato Records</small>
				</section>

				<div class="video">
					<YoutubeVideo videoId="3xOD2pT4xBQ" platform="yt" />
				</div>

				<section class="members">
					<h2>{$t('home.band.title')}</h2>
					<p>Michael Kirkland</p>
					<small>{$t('home.band.guitar')}, {$t('home.band.vocal')}</small>
					<p>Rafa Crossa</p>
					<small>{$t('home.band.guitar')}, {$t('home.band.vocal')}</small>
					<p>Slav Basharov</p>
					<small>{$t('home.band.keys')}, {$t('home.band.vocal')}</small>
					<p>Carlos Flores</p>
					<small>{$t('home.band.bass')}</small>
					<p>Olmo</p>
					<small>{$t('home.band.drums')}</small>
				</section>

				<div class="text-divider">
					<p>There's a problem out there, somewhere</p>
					<div class="page-divider" />
					<p>And we pretend like it just don't exist</p>
					<div class="page-divider" />
					<p>You know exactly what I'm talking about</p>
					<div class="page-divider" />
					<p>I'm talking about this</p>
				</div>

				<div class="video-2">
					<YoutubeVideo videoId="wemrSTU7fYA" platform="yt" />
				</div>

				<section class="rehearsals">
					<img src="el-pato-records.png" />
					<a href="https://www.youtube.com/channel/UCy_39NlQINm-Nt_F5vR3deA"
						><h2>☞ El Pato Records</h2></a
					>
					<h1>+ {$t('home.elpato.description')}</h1>
				</section>

				<!-- 
				<section class="poem">
					<small>
						There's people on the streets<br />
						Going about their usual business<br />
						Some of them got permed up hairdos<br />
						And money in their purse<br />
						Others got newspaper hats and<br />
						Half a dime to their name, but<br />
						Beggars and businessmen<br />
						They all do it the same<br />
						Staring 'til their eyes fall out<br />
						From the back of their heads<br />
						Turning as that woman walks by<br />
						The lady all dressed in paint<br />
						<br />
						There's purple in the sky tonight<br />
						And a rain rising from below<br />
						Street sellers singing their trade<br />
						Under burned out broken bulbs<br />
						Symbols of authority<br />
						Hiding beneath their coats<br />
						Pretending not to notice <br />
						The kicks to the cowering drunk, but<br />
						Lawmen and criminals<br />
						They are all too alike<br />
						The instance that womanly saint walks past<br />
						The lady all dressed in paint<br />
						<br />
						There's a problem out there, somewhere<br />
						And we pretend like it just don't exist<br />
						You know exactly what I'm talking about<br />
						I'm talking about this<br />
						These state of affairs we're living<br />
						Bootleg handshakes and ballroom deals<br />
						One night stands with our conciousness<br />
						Meanwhile married to our sins, but<br />
						Greed and gluttony<br />
						Are synonyms at times<br />
						When every fool hungers<br />
						For that lady all dressed in paint<br />
						<br />
						--- Written by Michael Kirkland
					</small>
				</section>
			</div> -->

				<div class="text-divider">
					<p>people come, people go</p>
					<div class="page-divider" />
					<p>people laugh, people cry</p>
					<div class="page-divider" />
					<p>sometimes they look at each other</p>
					<div class="page-divider" />
					<p>and not know what to say</p>
				</div>
			</div>
		</div></container
	>
	<footer>© Uncle John's Band 2022</footer>
{/if}

<style lang="scss">
	container {
		display: block;
		max-width: 1250px;
		margin: auto;
		padding: 0 3em;
		@media screen and (max-width: 900px) {
			padding: 0 1em;
		}
		@media screen and (max-width: 600px) {
			padding: 0 0em;
		}
	}
	.bg {
		/* position: absolute; */
		top: -20px;
		left: 0;
		right: 0;
		position: relative;
		display: flex;
		margin: auto;
		width: 500px;
		z-index: -1;
		filter: grayscale(0.6);
	}

	.line {
		height: 1px;
		background-color: rgb(77, 70, 70);
		width: 100%;
		margin: 0 1em;
	}

	.text-divider {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		grid-column: 1 / 5;
		color: rgb(35, 33, 33);
		white-space: nowrap;
		gap: 5px;
		transform: rotate(180deg);
		font-size: x-small;
	}

	.page-divider {
		height: 1px;
		background-color: black;
		width: 100%;
	}

	.nav {
		margin: 5em 0em 0;
		color: black;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		text-align: left;
		padding: 0;
		height: 100%;
		position: relative;

		.title {
			p {
				margin: 0 0 0.5em 2em;
				opacity: 0.5;
				word-wrap: break-spaces;
				white-space: normal;
			}
		}
		p {
			color: black;
			margin: 0;
			white-space: nowrap;
		}
		@media screen and (max-width: 900px) {
			flex-direction: column;
			margin: 2em 0;
			.title {
				align-self: center;
				margin: 0;
				p {
					max-width: 300px;
					text-align: center;
					margin: 0 auto;
				}
				h1 {
					font-size: 3em;
					margin-block-start: 0;
					margin: 0;
				}
			}
			.line {
				margin: 0 2em;
			}
		}

		@media screen and (max-width: 600px) {
			.title {
				h1 {
					font-size: 2.3em;
					margin-block-start: 0;
					margin: 0;
				}
			}
		}

		.language {
			display: flex;
			@media screen and (max-width: 900px) {
				position: absolute;
				top: -20px;
				right: 20px;
			}
		}
		.members {
			display: flex;
			gap: 1em;
		}
		/* background-color: rgb(30, 29, 28); */
		/* border: 2px dashed rgba(255, 255, 255, 0.126); */
		h1 {
			margin: 0 0 0 0.5em;
			font-size: 3.3em;
			padding: 10px 0 0 0;
			z-index: 2;
			position: relative;
			white-space: nowrap;
		}
		a {
			font-size: 1.5em;
		}
	}

	.sections {
		color: rgb(59, 5, 5);
		font-size: 1.2em;
		padding: 0 1em;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: auto auto auto auto;
		min-height: inherit;
		position: relative;
		margin: 0.2em 0;
		/* border-left: 1px solid rgb(37, 36, 36);
		border-right: 1px solid rgb(44, 43, 43); */

		@media screen and (max-width: 900px) {
			flex-direction: column;
			width: 100%;
			margin: 0.2em 0em;
		}
		&:after {
			content: "There's purple in the sky tonight - And a rain rising from below";
			transform: rotate(270deg);
			left: -600px;
			top: 400px;
			opacity: 0.7;
			position: absolute;
			@media screen and (max-width: 900px) {
				display: none;
			}
		}
		&:before {
			content: 'Greed and gluttony _ Are synonyms at times _  When every fool hungers  _  For that lady all dressed in paint';
			transform: rotate(90deg);
			right: -600px;
			opacity: 0.7;
			top: 600px;
			position: absolute;

			@media screen and (max-width: 900px) {
				display: none;
			}
		}
	}

	section {
		padding: 1em;
		color: white;
		box-sizing: border-box;
		&:nth-child(even) {
		}

		&.about {
			padding: 0;
		}

		p {
			margin-bottom: 0;
		}
	}
	h2 {
		margin: 0;
	}

	.grid {
		justify-self: flex-end;
		position: relative;
		/* border: 2px solid rgb(228, 227, 221); */
		filter: sepia(0.1);
		grid-column: 1 / 5;
		gap: 5px;
		grid-row: 1;
		display: grid;
		grid-template-columns: minmax(60%, 700px) 1fr 1fr;
		grid-template-rows: 180px 1fr auto;
		z-index: 1;
		width: 100%;

		@media screen and (max-width: 900px) {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			.img-2 {
				display: none;
			}

			section {
				height: fit-content;
			}
		}

		img {
			display: flex;
			position: relative;
			mask-border-source: url('/rect-clip.svg');
			mask-border-slice: 10%;
			-webkit-mask-box-image-source: url('/rect-clip.svg');

			height: 100%;
			@media screen and (max-width: 900px) {
				height: auto;
				flex: 0 1 auto;
			}
		}

		.img-1 {
			grid-row: 1 / 3;
			grid-column: 1;
			object-fit: cover;
			/* filter: grayscale(1); */
		}

		.img-2 {
			grid-row: 1;
			grid-column: 2 / 4;
			object-fit: cover;
		}

		.img-3 {
			grid-row: 2;
			grid-column: 2 / 4;
			object-fit: cover;
		}
		.img-4 {
			grid-column: 2;
			object-fit: cover;
		}
		.dates {
			grid-row: 4;
			grid-column: 1 / 3;
			color: rgb(255, 255, 255);
			transform: rotateZ(0.35deg) rotateX(0.5deg);
			z-index: -1;
			position: relative;
			background-color: rgb(44, 38, 38);
			background-image: url('/dark-tire.png');
		}
		.text-divider {
			grid-column: 1 / 4;
			@media screen and (max-width: 900px) {
				display: none;
			}
		}
		.contact {
			grid-row: 4;
			grid-column: 3 / 4;
			color: rgb(244, 235, 235);
			/* background-color: rgb(20, 10, 10); */
			position: relative;

			transform: rotateZ(-0.5deg) rotateX(2deg);
			z-index: -1;
			background-color: rgb(44, 38, 38);
			background-image: url('/dark-tire.png');
			p {
				margin: 0;
			}
		}
		.video {
			grid-row: 6;
			grid-column: 1;
			height: 100%;
			@media screen and (max-width: 900px) {
				height: auto;
				width: 100%;
			}
		}
		.video-2 {
			grid-row: 7;
			grid-column: 1;
			height: 100%;
			@media screen and (max-width: 900px) {
				height: auto;
				width: 100%;
			}
		}
		.members {
			height: 100%;
			grid-row: 6;
			grid-column: 2 / 4;
			color: rgb(244, 235, 235);
			position: relative;
			background-color: rgb(44, 38, 38);
			background-image: url('/dark-tire.png');
			@media screen and (max-width: 900px) {
				width: 100%;
				height: fit-content;
			}
			small {
				opacity: 0.7;
			}
		}
		.poem {
			grid-row: 7;
			grid-column: 1 / 4;
			color: white;
			position: relative;
			background: url('/noise.png');
			/* background-color: #030202; */
			@media screen and (max-width: 900px) {
				height: auto;
				flex: 0 1 auto;
				background-color: white;
				color: #030202;
				transform: rotate(10deg);
			}
		}
		@keyframes rotate {
			from {
				transform: rotate(0turn);
			}
			to {
				transform: rotate(-1turn);
			}
		}
		.rehearsals {
			grid-row: 7;
			grid-column: 2 / 4;
			background-color: rgb(44, 38, 38);
			background-image: url('/dark-tire.png');
			text-align: center;
			img {
				width: 80px;
				height: auto;
				margin: 2em auto;
				animation: rotate 4s infinite forwards linear;
			}
		}
	}

	.page-divider {
		grid-column: 1 / 5;
	}

	.videos {
		grid-column: 1 / 5;
	}

	img {
		width: 100%;
	}

	th,
	td {
		text-align: left;
		&:nth-child(n + 2) {
			padding-left: 2em;
		}
	}
	.passed {
		text-decoration: line-through;
	}

	footer {
		padding: 2em;
		text-align: center;
	}
</style>
