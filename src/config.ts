export const backendURL = ():string => {
	return String(import.meta.env.VITE_BACKEND_URL);
}