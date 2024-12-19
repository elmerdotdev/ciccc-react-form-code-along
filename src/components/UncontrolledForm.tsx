import React, { useRef } from 'react'

const UncontrolledForm = () => {
  const firstnameRef = useRef<HTMLInputElement>(null)
  const lastnameRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const firstname = firstnameRef.current?.value || ""
    const lastname = lastnameRef.current?.value || ""

    console.log(firstname, lastname)
  }

  return (
    <div>
      <h2>Uncontrolled</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">
          <input type="text" name="firstname" placeholder="Enter firstname" ref={firstnameRef} />
        </label>
        <label htmlFor="lastname">
          <input type="text" name="lastname" placeholder="Enter lastname" ref={lastnameRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm