import { useEffect, useState } from "react";
import Link from 'next/link'

export default function Movies() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
      setLoading(true)
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=85107a696f712b5b683bd5a4f10afc16')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
  
    return (
      <section>
  
          <article>
  
  <h2>Genrer</h2>
  
  {data.genres.map((item) =>  (
  <Link key={item.id} href={'/movies/' + item.id}>
  <li>{item.name}</li>   
  </Link>
  ))}
  </article>    
      </section>   
)
}
