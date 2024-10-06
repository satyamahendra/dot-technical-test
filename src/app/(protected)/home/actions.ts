"use server"

export async function checkShippingCost(formData: FormData) {
    const origin = formData.get("origin")
    const destination = formData.get("destination")
    const weight = formData.get("weight")
    const courier = formData.get("courier")

    const payload = {
        origin,
        destination,
        weight,
        courier
    }

    try {
        const response = await fetch("https://api.rajaongkir.com/starter/cost", {
            method: "POST",
            headers: {
                key: process.env.RAJAONGKIR_API_KEY!,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
        })

        const data = await response.json()
        return { error: "", data: data }
    } catch (error) {
        return { error: error, data: null }
    }
}

export async function getCities() {
    try {
        const response = await fetch("https://api.rajaongkir.com/starter/city", {
            method: "GET",
            headers: {
                key: process.env.RAJAONGKIR_API_KEY!,
            },
        })
        return { error: null, data: await response.json() }
    } catch (error) {
        return { error: error, data: null }
    }
}

