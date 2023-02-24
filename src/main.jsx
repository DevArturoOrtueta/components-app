import React from 'react'
import ReactDOM from 'react-dom/client'
import { Card } from './components/Card/Card'
const objeto = [
  {
    "id": 1,
   "title": 'Hola',
   "image": 'https://firebasestorage.googleapis.com/v0/b/arturoortueta-9b8b4.appspot.com/o/profile.jpg?alt=media&token=66cbad56-4210-4477-9e70-6d4b393eb8b2',
    "link_card": "https://www.google.com/",
    "link_ref": ""
  },
  {
    "id": 2,
    "title": 'Hola 2'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {
      objeto.map(({title, image, id, link_card}) => (
        <Card title={title} image={image} key={id} link_card={link_card}/>
      ))
    }
    
  </React.StrictMode>
)
