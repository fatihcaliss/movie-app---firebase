import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ListGroup from 'react-bootstrap/ListGroup';


const Details = () => {
    const { videoKey, detailMovie } = useContext(AppContext);
    console.log(detailMovie);
    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    return (
        <div className='container'>
            <div className="container">
                <iframe src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
                    title="YouTube video"
                    allowFullScreen ></iframe>
            </div>
            <div className="row p-5">
                <div className='col-lg-6'>
                    <img src={IMG_API + detailMovie.poster_path} alt={detailMovie.original_title} width={400} height={"auto"} />
                </div >
                <div className='col-lg-6'>
                    <h1>{detailMovie.original_title}</h1>
                    <p className='fs-3'>{detailMovie.overview}</p>
                    <ListGroup variant="flush">
                        <ListGroup.Item><span>IMDB 🎬 </span>{detailMovie.vote_average}</ListGroup.Item>
                        <ListGroup.Item>Total Vote 🎭 {detailMovie.vote_count}</ListGroup.Item>
                        <ListGroup.Item>Release Date 📅 {detailMovie.release_date} </ListGroup.Item>
                        <ListGroup.Item>PPopularity ✨ {detailMovie.popularity}</ListGroup.Item>
                    </ListGroup>
                </div>

            </div>
        </div>
    )
}

export default Details