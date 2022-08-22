import { get, post } from "./backend"

export async function getMobile() {
    return get("/api/product")
}

export async function getMobileDetails(itemId) {
    return get(`/api/product/${itemId}`)
}

export async function postAppCart(payload) {
    return post("/api/cart", payload)
}