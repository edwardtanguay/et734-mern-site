import { useState } from "react";
import { IEmployee } from "../interfaces";

export const PageWelcome = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([]);

	return (
		<>
			<h2>There are {employees.length} employees:</h2>
		</>
	)
}