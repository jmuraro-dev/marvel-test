import {API_BASE_URL, API_PARAMS_URL} from "./config";

export async function getComics(offset) {
    if (offset === undefined)
        offset = 0

    const url =
        API_BASE_URL +
        '/v1/public/comics?format=comic&noVariants=true&' +
        'limit=' + 10 + '&' +
        'offset=' + offset + '&' +
        API_PARAMS_URL

    try {
        const response = await fetch(url)
        const json = await response.json()
        return json.data
    } catch (err) {
        console.error("Fetch Error for getting comics -----", err)
        return null
    }
}

export async function getComic(id) {
    const url =
        API_BASE_URL +
        '/v1/public/comics/' + id + '?format=comic&noVariants=true&' +
        API_PARAMS_URL

    try {
        const response = await fetch(url)

        if (response.status === 404) {
            return 404
        }

        const json = await response.json()
        return json.data.results[0]
    } catch (err) {
        console.error("Fetch Error for getting comics -----", err)
        return null
    }
}