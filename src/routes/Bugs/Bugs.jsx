import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function Tickets(props) {
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div>Tickets</div>
  )
}
