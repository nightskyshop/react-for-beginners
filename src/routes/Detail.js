import { useCallback, useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = useCallback(async() => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();

            setMovie(json.data.movie);
            setLoading(false);
        }, [id])

        useEffect(() => {
            getMovie()
        }, [getMovie])
        return (
            <div>
                {loading ? <h1>Loading...</h1> : null}
                <img src={movie.large_cover_image} alt="movie cover" />
                <br></br>
                <iframe title="kimhaju" width="560" height="315" src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h1>{movie.title}</h1>
                <p>{movie.description_full}</p>
                <h3>opening date: {movie.year}</h3>
                <h3>rating: {movie.rating}</h3>
                <h3>runtime: {movie.runtime}</h3>
            </div>
          );
}

export default Detail;