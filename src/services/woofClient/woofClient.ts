import { apiGet } from "../apiClient"
import { WoofResponse } from "./types"


const woofClient = {
    woof: { defaultKey: ['woof'], fn: (params?: any) => apiGet<any, WoofResponse>('woof.json', { params }) }
}

export default woofClient