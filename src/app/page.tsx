import { validateRequest } from "@/lib/lucia/validate-request";
import { redirect } from "next/navigation";

export default async function Home() {

	const { session } = await validateRequest()

	if (!session) {
		redirect("/auth")
	} else {
		redirect("/home")
	}

}
