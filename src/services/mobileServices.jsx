import { get } from "./backend"

export async function getMobile() {
    return get("/api/product")
}
