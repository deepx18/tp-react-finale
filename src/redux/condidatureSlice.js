import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    candidat: "Anas Lahmar",
    poste: "RH",
    departement: "RH",
    contrat: "CDD",
    statut: "en attente"
  }
]

const condidatureSlice = createSlice({
  name: "condidature",
  initialState,
  reducers: {
    ajouter: (state, payload) => {
      console.log(payload.payload.id)
      state.push(payload.payload)
    },
    supprimer: (state, payload) => {
      return state.filter((s) => s.id !== payload.payload )
    },
    accepter: (state, payload) => {
      state.map((s) => {
        if (s.id === payload.payload) {
          s.statut = "accepté"
        }
      })
    },
    refuse: (state, payload) => {
      state.map((s) => {
        if (s.id === payload.payload) {
          s.statut = "refusé"
        }
      })
    },

  }
})

export const {ajouter, supprimer, accepter, refuse} = condidatureSlice.actions
export default condidatureSlice.reducer