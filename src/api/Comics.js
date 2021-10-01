import {API_BASE_URL, API_HASH, API_PUBLIC_KEY} from "./config";

export async function getComics() {
    const url = API_BASE_URL + '/v1/public/comics?format=comic&noVariants=true&ts=1&apikey=' + API_PUBLIC_KEY + '&hash=' + API_HASH

    try {
        const response = await fetch(url)
        const json = await response.json()
         return json.data.results
    } catch (err) {
        console.error("Fetch Error for getting comics -----", err)
        return null
    }
}