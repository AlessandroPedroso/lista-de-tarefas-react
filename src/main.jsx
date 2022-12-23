import React from 'react'
import ReactDOM from 'react-dom/client'
import ListaDeTarefas from './ListaDeTarefas'
import GLobalStyle from './globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GLobalStyle />
    <ListaDeTarefas />
  </React.StrictMode>,
)
