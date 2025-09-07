import React, { useEffect } from 'react'
import axiosInstance  from '../../utils/axiosInstance';
import requests from '../../utils/requests';
const Banner = () => {
    const [movie, setMovie] = useState(());
    useEffect (() =>{
        (async () => {
            try {
                const request = await axiosInstance.get(requests.fetchComedy)
                // console.log(request)
                setMovie(request.data.results[
                    Math.floor(Math.random()*request.data.results.length)
                ])
            } catch (error) {
                console.log("error", error);
            }

        })()
    }, [])
  return (
    <div className='banner'>
        style={{
            backgroundSize:"cover",
            backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop path}')`,
            
            backgroundRepeat: "no-repeat"

        }}
        
        
        
        </div>
  )
}

export default Banner