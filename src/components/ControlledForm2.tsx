import React, { useState } from 'react'

interface FormData {
  firstname: string,
  lastname: string,
  email: string,
  age: number,
  role: string, // select
  education: string[], // checkbox
  bio: string
}

const ControlledForm2 = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    age: 0,
    role: "",
    education: [],
    bio: ""
  })
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prevState => {
        const education = checked ? [...prevState.education, value] : prevState.education.filter(level => level !== value)
        return { ...prevState, education }
      })
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setIsSubmitted(true)
  }

  return (
    <div>
      <h2>Bigger Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select your role</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Full-Stack Developer">Full-Stack Developer</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="education-primary">Primary</label>
          <input
            type="checkbox"
            name="education"
            id="education-primary"
            value="Primary"
            checked={formData.education.includes("Primary")}
            onChange={handleChange}
          />
          <label htmlFor="education-grade">Grade school</label>
          <input
            type="checkbox"
            name="education"
            id="education-grade"
            value="Grade School"
            checked={formData.education.includes("Grade School")}
            onChange={handleChange}
          />
          <label htmlFor="education-high">High school</label>
          <input
            type="checkbox"
            name="education"
            id="education-high"
            value="High School"
            checked={formData.education.includes("High School")}
            onChange={handleChange}
          />
          <label htmlFor="education-college">College</label>
          <input
            type="checkbox"
            name="education"
            id="education-college"
            value="College"
            checked={formData.education.includes("College")}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="bio">About Yourself</label>
          <textarea name="bio" id="bio" value={formData.bio} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Create Account</button>
      </form>

      {isSubmitted ? (
        <ul>
          <li>First Name: {formData.firstname}</li>
          <li>Last Name: {formData.lastname}</li>
          <li>Email Address: {formData.email}</li>
          <li>Age: {formData.age}</li>
          <li>Role: {formData.role}</li>
          <li>Education: {formData.education.join(", ")}</li>
          <li>Bio: {formData.bio}</li>
        </ul>
      ) : (
        <p>Please submit form :(</p>
      )}
    </div>
  )
}

export default ControlledForm2