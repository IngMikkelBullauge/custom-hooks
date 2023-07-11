import { useState } from 'react'

export const useForm = ( initialForm = {} ) => {
  // {
  //   username: '',
  //   email: '',
  //   password: ''
  // }

  // Formulario inicial con N controles
  const [ formState, setFormState ] = useState( initialForm )

  // Establecer valor en elemento del formulario
  const onInputChange = ( { target } ) => {
    
    const { name, value } = target
    
    setFormState({
      ...formState, // Mantener valores del objeto completo
      [ name ]: value,
    })

  }

  // Limpiar el formulario
  const onResetForm = () => {
    setFormState( initialForm )
  }
  
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }

}
