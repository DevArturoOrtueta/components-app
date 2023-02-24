import React from 'react'
import ReactDOM from 'react-dom/client'
import { Card } from './components/Card/Card'
import { LoadingSpinner } from './components/Spinner/LoadingSpinner'
const objeto = [
  {
    "id": 1,
    "title": 'Hola',
    "image": 'https://firebasestorage.googleapis.com/v0/b/arturoortueta-9b8b4.appspot.com/o/profile.jpg?alt=media&token=66cbad56-4210-4477-9e70-6d4b393eb8b2',
    "link_card": "https://www.google.com/",
    "link_ref": "",
    "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "footer": "Soy un footer"
  },
  {
    "id": 2,
    "title": 'Hola 2',
    "footer": 'Soy un footer 2'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      objeto.map(({title, image, id, link_card, body, footer}) => (
        <Card title={title} image={image} key={id} body={body} footer={footer}/>
      ))
    }
    
  </React.StrictMode>
)
