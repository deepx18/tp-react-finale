import { useEffect, useState } from "react"

export default function ProgrammeArabe() {
  const [matchs, setMatchs] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/matchs")
    .then((res) => res.json())
    .then((data) => {setMatchs([...data]); console.log(data); setFiltered([...data])})
  }, [])

  const handleFilter = (value) => {
    if (value === "") {
      setFiltered([...matchs])
      return
    }
    const tmp = matchs.filter((m) => m.equipe1.includes(value) || m.equipe2.includes(value))
    setFiltered([...tmp])
    
  }

  return (
    <>
      <div>ProgrammeArabe Component</div>
        <input type="text" onChange={(e) => handleFilter(e.target.value)}/>
      {          
        filtered.map((m) => (
          <div className="card">{m.equipe1} x {m.equipe2} Le {m.date} {m.heure} à {m.stade} {m.ville}</div>
        ))
      }
      
    </>
  )
}