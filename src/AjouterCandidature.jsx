import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ajouter } from './redux/condidatureSlice'

function AjouterCandidature() {
  const [candidat, setCandidat] = useState("")
  const [poste, setPoste] = useState("")
  const [departement, setDepartement] = useState("")
  const [contrat, setContrat] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(ajouter({
      id: Date.now(),
      candidat,
      poste,
      departement,
      contrat,
      statut: "en attente"
    }))
  }

  return (
    <>
      <div>AjouterCandidature</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={candidat} onChange={(e) => setCandidat(e.target.value)}  />
        <input type="text" value={poste} onChange={(e) => setPoste(e.target.value)}  />
        <input type="text" value={departement} onChange={(e) => setDepartement(e.target.value)}  />
        <input type="text" value={contrat} onChange={(e) => setContrat(e.target.value)}  />
        <input type="submit" value="Ajouter" />
      </form>
    </>
  )
}

export default AjouterCandidature