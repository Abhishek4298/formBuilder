export const getForms = () => {
	const forms = localStorage.getItem('forms')
	return forms ? JSON.parse(forms) : []
}

export const saveForm = (form) => {
	let forms = getForms()
	forms.push(form)
	localStorage.setItem('forms', JSON.stringify(forms))
}
