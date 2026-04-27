import { API_ENDPOINT } from "@/data";
import type { ApiPayload } from "@/types";



export async function submitToApi(payload: ApiPayload): Promise<void> {
    const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok || data.success === false) {
        throw new Error(data.message ?? `Request failed: ${res.status}`);
    }
}