import { get } from "./backend"

export async function getMobile() {
    return get("/api/product")
}

export async function getMobileDetails(itemId) {
    return get(`/api/product/${itemId}`)
}
