import axios from 'axios'

const processResponse = ({ data }) => data
const transformItem = ({
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

    getOne(id) {
        return this.client.get(`/movies/${id}`)
            .then(processResponse)
            .then(transformItem)
    }

    getMany(options) {
        return this.client.get('/movies', { params: { ...options } })
            .then(processResponse)
            .then(({ data, offset, limit, total }) => ({ items: data.map(transformItem), offset, limit, total }))
    }
}

export const instance = new Api({
    baseUrl: process.env.API_BASE_URL
})

export default instance
