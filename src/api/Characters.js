import {API_PARAMS_URL} from "./config";

export async function getCharacter(uri) {
    console.log(uri + '?' + API_PARAMS_URL)
    try {
        const response = await fetch(uri + '?' + API_PARAMS_URL)
        console.log(response)
        if (response.status === 200) {
            const json = await response.json()
            return json.data.results[0]
        } else {
            return null
        }
    } catch (err) {
        console.error("Fetch Error for getting character -----", err)
        return null
    }
}