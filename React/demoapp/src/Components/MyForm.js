import React,{ useState } from 'react'

export default function MyForm(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    //   setInputs(values => ({}))
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="name" 
          value={props.name} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your email:
          <input 
            type="email" 
            name="email" 
            value={props.email} 
            onChange={handleChange}
          />
          </label>
          <label>Enter your password:
          <input 
            type="password" 
            name="password" 
            value={props.password} 
            onChange={handleChange}
          />
          </label>
          <label>Select your car:
                <select name = "car" value={props.car} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
          </label>
          <label>
          <textarea name ="message" value={props.message || ""} onChange={handleChange} />
          </label>
          <input type="submit" />
      </form>
    )
  }