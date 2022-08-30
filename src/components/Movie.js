import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, rating, year, summary, genres }) {
    return (
        <Link to={`/movie/${id}`}>
            <div className={styles.movie}>
                <img src={coverImg} alt={title} className={styles.movie__img} />
                <div className={styles.movie_text}>
                    <h2 className={styles.movie__title}>
                        {title}({rating})
                    </h2>
                    <h3 className={styles.movie__year}>{year}</h3>
                    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                    <ul className={styles.movie__genres}>
                        {genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;