import axios from 'axios'

const processResponse = ({ data }) => data
const transformMovie = ({
    id,
    title,
    tagline,
    vote_average,
    vote_count,
    release_date,
    poster_path,
    overview,
    budget,
    revenue,
    runtime,
    genres,
}) => ({
    id,
    title,
    description: overview,
    tagline,
    voteAverage: vote_average,
    voteCount: vote_count,
    releaseDate: release_date,
    imageUrl: poster_path,
    budget,
    revenue,
    runtime,
    genres
})

class Api {
    constructor({ baseUrl }) {
        this.client = axios.create({
            baseURL: baseUrl,
        })
    }

    getMovies(options) {
        return this.client.get('/movies', { params: { ...options } })
            .then(processResponse)
            .then(res => ({ ...res, data: res.data.map(transformMovie) }))
    }

    getMovie(id) {
        return this.client.get(`/movies/${id}`)
            .then(processResponse)
            .then(transformMovie)
    }
}

export const instance = new Api({
    baseUrl: process.env.API_BASE_URL
})

export default instance
