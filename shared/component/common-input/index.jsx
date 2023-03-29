import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import styles from '../../../styles/commoninput.module.scss'

function CommonInput({ type }) {
  const router = useRouter()
  const [name, setName] = useState()
  const handleInput = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  return (
    <Form className={styles.form}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='userId' type="text" onChange={handleInput} placeholder="Enter User ID" className={styles.inputField}/>
      </Form.Group>
      <Button variant="primary" type="submit" className={styles.btn} onClick={() => {
        type === 'props' ? (router.push({
          pathname: '/files/[id]',
          query: { id: name},
        })) : (router.push({
          pathname: '/githubUser/[id]',
          query: { id: name},
        }))
      }}>
        Submit
      </Button>
    </Form>
  )
}

export default CommonInput