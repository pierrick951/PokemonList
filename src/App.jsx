import { useEffect, useState } from "react"
const APIKEY = import.meta.env.VITE_API_KEY

export default function App() {
  const [Hero, sethero] = useState()

  useEffect(() => {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
  }, [])
  return (
    <div>App</div>
  )
}