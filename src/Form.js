import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props
    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Team Member</h2>
            </div>
            <div className='form-group inputs'>
                &nbsp;&nbsp;<label>Name:&nbsp;
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        placeholder='-- Type a name --'
                        maxLength='25'
                        type="text"
                    />
                </label>
                &nbsp;&nbsp;<label>Email:&nbsp;
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        placeholder='-- Type an email --'
                        maxLength='50'
                        type='email'
                    />
                </label>
                &nbsp;&nbsp;<label>Role:&nbsp;
                    <select onChange={onChange} value={values.role} name="role">
                        <option value="">-- Select a Role --</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value="Web UI Developer">Web UI Developer</option>
                        <option value="Front End Developer">Front End Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                    </select>
                </label>
                &nbsp;&nbsp;<button disabled={!values.name || !values.email || !values.role ? true : false}>submit</button>
            </div>
        </form>
    )
}