import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
export default function EventosHome() {
    
    const [evento ,setEvento] = useState ({})
    const router = useRouter()

    useEffect(() => {

        const id = router.query.id
        if (id) {
            axios.get(`http://localhost:3000/eventos/${id}`)
            .then(resultado => setEvento(resultado.data))
        }
    }, [])


return(
    <>
    <h1>Detalhe do Evento</h1>
    <p>{evento.titulo}</p>
    <p>{evento.descricao}</p>
    </>
)
}