import { useMovieStore } from "../store/useMovieStore";

export default function MovieList() {
	const movies = useMovieStore((state) => state.movies);
	const toggleWatched = useMovieStore((state) => state.toggleWatched);
	const watchedCount = movies.filter((movie) => movie.watched).length;

	return (
		<section className="movie-panel">
			<p className="eyebrow">Weekly Assignment</p>
			<h1>Movie Tracker</h1>
			<p className="panel-subtitle">Toggle each title as you watch it.</p>

			<div className="stats-row" aria-live="polite">
				<div className="stat-card">
					<span className="stat-label">Watched</span>
					<strong>{watchedCount}</strong>
				</div>
				<div className="stat-card">
					<span className="stat-label">Remaining</span>
					<strong>{movies.length - watchedCount}</strong>
				</div>
			</div>

			<ul className="movie-list" aria-label="Movie list">
				{movies.map((movie, index) => (
					<li
						key={movie.id}
						className={`movie-card ${movie.watched ? "is-watched" : ""}`}
						style={{ animationDelay: `${index * 90}ms` }}
					>
						<div>
							<h2>{movie.title}</h2>
							<p>{movie.watched ? "Finished" : "Up next"}</p>
						</div>
						<button
							type="button"
							className="watch-toggle"
							onClick={() => toggleWatched(movie.id)}
						>
							{movie.watched ? "Mark Unwatched" : "Mark Watched"}
						</button>
					</li>
				))}
			</ul>
		</section>
	);
}
