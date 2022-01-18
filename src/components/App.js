import { useEffect, useState } from "react";

// create your App component here
export default function App() {
    const [image, setImage] = useState('')

    const API_URL = 'https://dog.ceo/api/breeds/image/random'
    
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            setImage(data.message)
        })
        // console.log('side effect')
    }, [])

    // console.log('rendered')

    return(
        <>
            { !image ? <p>Loading....</p> : <img alt='A Random Dog' src={image} />}
        </>
    )
}
