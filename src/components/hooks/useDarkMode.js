import React, { useEffect, useState }  from 'react'
import useLocalStorage from './useLocalStorage'

function useDarkMode(key, initialValue) {
    const [someValue, setSomeValue ] = useLocalStorage(key, initialValue)

    useEffect(()=> {
        if(someValue){
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [someValue])
    return [someValue, setSomeValue]
}

export default useDarkMode
