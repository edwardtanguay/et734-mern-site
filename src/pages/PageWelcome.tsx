import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces";
import * as config from "../config";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";

export const PageWelcome = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([]);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				const response = await axios.get(
					`${config.backendURL()}/employees`
				);
				const _employees = response.data;
				setEmployees(_employees);
			})();
		}, 1500);
	}, []);

	return (
		<>
			{employees.length === 0 ? (
				<ImSpinner9 className="animate-spin text-6xl text-slate-500 m-4" />
			) : (
				<>
					<h2 className="text-xl mb-3">
						There are {employees.length} employees:
					</h2>
					<ul className="list-disc ml-6 ">
						{employees.map((employee) => {
							return (
								<li key={employee.employeeID}>
									<span className="font-semibold">
										{employee.firstName} {employee.lastName}
									</span>
									- {employee.title}
								</li>
							);
						})}
					</ul>
				</>
			)}
		</>
	);
};
