import React from 'react'
import { connect } from 'react-redux'

const FormList = ({ forms }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Form Name</th>
					<th>Form URL</th>
					<th>Created At</th>
					<th>Total Responses</th>
				</tr>
			</thead>
			<tbody>
				{forms && forms.length > 0 ? (
					forms.map((form) => {
						return (
							<tr key={form.id}>
								<td>{form.name}</td>
								<td>{form.url}</td>
								<td>{form.createdAt}</td>
								<td>{form.responses}</td>
							</tr>
						)
					})
				) : (
					<p>No forms found</p>
				)}
			</tbody>
		</table>
	)
}

const mapStateToProps = (state) => ({
	forms: state.forms,
})

export default connect(mapStateToProps)(FormList)
