/**
 * ¿Qué es un Hook?
 * 
 * Es una función que tiene un return
 * Un Hook puede estar amarrado a un Hook propio de React
 * Aquí se genera la lógica de negocio
 */

import { useState } from 'react'

export const useCounter = ( initialValue = 1 ) => {
  
  const [ counter, setCounter ] = useState( initialValue )

  const increment = ( value = 1 ) => {
    setCounter( counter + value )
  }

  const decrement = ( value = 1 ) => {
    if( counter === 1 ) return
    
    setCounter( counter - value )
  }

  const reset = () => {
    setCounter( initialValue )
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  }

}