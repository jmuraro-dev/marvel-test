import {API_BASE_URL, API_PARAMS_URL} from "./config";

export async function getComics(max, offset) {
    if (max === undefined)
        max = 10
    else if (max > 10)
        max = 10
    else if (max < 0)
        max = 1

    if (offset === undefined)
        offset = 0

    const url =
        API_BASE_URL +
        '/v1/public/comics?format=comic&noVariants=true&' +
        'limit=' + max + '&' +
        'offset=' + offset + '&' +
        API_PARAMS_URL

    try {
        const response = await fetch(url)
        const json = await response.json()
        return json.data.results
    } catch (err) {
        console.error("Fetch Error for getting comics -----", err)
        return null
    }
}