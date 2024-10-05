import Navbar from "@/components/Navbar";
import { validateRequest } from "@/lib/lucia/validate-request";
import { redirect } from "next/navigation";

interface Province {
	province_id: number
	province: string
}

async function fetchProvince() {
	const response = await fetch("https://api.rajaongkir.com/starter/city", {
		method: "GET",
		headers: {
			key: process.env.RAJAONGKIR_API_KEY!,
		},
	});

	return response.json()
}

export default async function Home() {

	const { session } = await validateRequest()

	if (!session) {
		redirect("/auth")
	} else {
		redirect("/home")
	}

}
