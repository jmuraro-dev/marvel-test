import MD5 from 'crypto-js/md5'

export const API_PRIVATE_KEY = ""
export const API_PUBLIC_KEY = ""

export const API_TIMESTAMP = 1
export const API_HASH = MD5(API_TIMESTAMP + API_PRIVATE_KEY + API_PUBLIC_KEY).toString()

export const API_BASE_URL = "https://gateway.marvel.com"
export const API_PARAMS_URL = 'ts=1&apikey=' + API_PUBLIC_KEY + '&hash=' + API_HASH

