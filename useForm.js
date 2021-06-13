import { useState } from "react"

// Hook creado para el manejo de inputs , que setea el valor ingresado segun el name del input

export const useForm = ( initialState = {} ) => {
  const [values, setValues] = useState(initialState)

  const reset = () => {
    setValues( initialState );
  }

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [ target.name ]: target.value
    })
  };

  return [ values, handleInputChange, reset ];
}
