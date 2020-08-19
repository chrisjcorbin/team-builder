import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Member from './Member'
import Form from './Form'

const initialMembersList = [
  {
    id: uuid(),
    name: 'Svyat Okshin',
    email: 'svyatoslav-okshin@lambdastudents.com',
    role: 'Team Lead'
  },
  {
    id: uuid(),
    name: 'Chris Corbin',
    email: 'corbin-christopher@lambdastudents.com',
    role: 'Front End Developer',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialMembersList })
}

const fakeAxiosPost = (url, { name, email, role }) => {
  const newMember = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newMember })
}

export default function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }
  const submitForm = () => {
    const member = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!member.name || !member.email) return
    fakeAxiosPost('fake.com', member)
      .then(res => {
        const newMemberFromAPI = res.data
        setMembers([...members, newMemberFromAPI])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }
  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setMembers(res.data))
  }, [])
  return (
    <div className='container'>
      <header><h1>Team Member App</h1></header>
      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  )
}