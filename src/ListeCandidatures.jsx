import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { accepter, refuse, supprimer } from './redux/condidatureSlice'

function ListeCandidatures() {
  const candidats = useSelector((state) => state.condidature)
  const dispatch = useDispatch()

  return (
    <>
      <div>AjouterCandidature</div>
      <table border="1">
        <thead>
          <tr>
            <th>Candidat</th>
            <th>Poste</th>
            <th>Département</th>
            <th>Contrat</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            candidats.map((c) => (
              <tr>
                <td>{c.candidat}</td>
                <td>{c.poste}</td>
                <td>{c.departement}</td>
                <td>{c.contrat}</td>
                <td>{c.statut}</td>
                <td>
                  <button onClick={() => dispatch(accepter(c.id))}>Accepter</button>
                  <button onClick={() => dispatch(refuse(c.id))}>Refusée</button>
                  {(c.statut === "en attente") && <button onClick={() => dispatch(supprimer(c.id))}>Supprimer</button>}
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </>

  )
}

export default ListeCandidatures