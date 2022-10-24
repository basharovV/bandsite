<script>
	import YoutubeVideo from '../components/YoutubeVideo.svelte';
	import { _ } from 'svelte-i18n';
</script>

<container>
	<div class="nav">
		<div class="title">
			<h1>Uncle<br />John's<br />Band</h1>
		</div>
		<div class="line" />
		<p>is</p>
		<div class="line" />
		<div class="members">
			<p>Michael Kirkland (guitar/vocal),</p>
			<p>Rafa Crossa (guitar/vocal),</p>
			<p>Slav Basharov (keys/vocal),</p>
			<p>Carlos Flores (bass),</p>
			<p>Olmo (drums)</p>
		</div>
		<div class="line" />
	</div>

	<div class="sections">
		<img class="corner-img" src="band-media/calling.png" />
		<section class="dates">
			<p>Jam band from 📍Marbella, Spain</p>
			<h2>Shows</h2>
			<table>
				<th>Date</th>
				<th>Location</th>
				<th>Tickets</th>
				<tr>
					<td>Sun, 16 October 2022</td>
					<td>Marbella Calling Festival</td>
					<td>Free</td>
				</tr>
			</table>
		</section>

		<div class="page-divider" />

		<section class="contact">
			<h2>☞ Contact</h2>
			<p>elpatostudios@protonmail.com</p>
		</section>
		<section class="photos">
			<h2>Photos</h2>
			<div class="gallery">
				<img src="band-media/terrace.jpg" />
				<img src="band-media/michael.png" />
				<img src="band-media/slav.jpg" />
				<img src="band-media/michael-guitar.jpg" />
				<img src="band-media/carlos.jpg" />
				<img src="band-media/rafa.jpg" />
			</div>
		</section>

		<section class="videos">
			<h2>Videos</h2>
			<YoutubeVideo videoId="3xOD2pT4xBQ" platform="yt" />
		</section>
	</div>
</container>

<style lang="scss">
	container {
		display: block;
		max-width: 1600px;
		margin: auto;
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
		background-color: rgb(232, 218, 218);
		width: 100%;
		margin: 0 1em;
	}

	.page-divider {
		height: 1px;
		background-color: rgb(232, 218, 218);
		width: 100%;
	}

	.nav {
		margin: 5em 5em 0;
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		text-align: left;
		padding: 0;
		height: 100%;
		position: relative;
		p {
			color: rgb(255, 250, 250);
		}

		.members {
			display: flex;
			gap: 1em;
			p {
				margin: 0;
				width: max-content;
			}
		}
		/* background-color: rgb(30, 29, 28); */
		/* border: 2px dashed rgba(255, 255, 255, 0.126); */
		h1 {
			margin: 0;
			font-size: 3.3em;
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
		grid-template-rows: auto auto auto;
		min-height: inherit;
		border-left: 1px solid white;
		border-right: 1px solid white;
		margin: 0.2em 5em;

		section {
			padding: 2em;
			&:nth-child(even) {
			}

			&.about {
				padding: 0;
			}
		}
	}

	.corner-img {
		width: 700px;
		justify-self: flex-end;
		filter: grayscale(0.7);
		position: relative;
		right: -50px;
		top: -50px;
		border: 2px solid rgb(228, 227, 221);
		grid-column: 2 / 5;
		grid-row: 1;
	}
	.dates {
		grid-row: 1;
		grid-column: 1 / 3;
	}

	.contact {
		grid-row: 3;
		grid-column: 3 / 5;
		text-align: end;
	}

	.page-divider {
		grid-column: 1 / 5;
	}

	.photos {
		grid-row: 3;
		grid-column: 1 / 4;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		gap: 5px;
		img {
			height: 300px;
			width: auto;
			object-fit: contain;
			border: 2px solid black;
			border-radius: 3px;
			filter: grayscale(0.7);

			&:hover {
				filter: grayscale(0);
			}
		}
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
</style>
