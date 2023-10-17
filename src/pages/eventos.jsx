import Cabecalho
  from "@/components/Cabecalho"
import styles from '@/styles/eventos.module.css'
import axios from "axios"
import { useEffect, useState } from "react"

export default function EventoPage() {

  const [evento, setEvento] = useState({
    titulo: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
    local: ""
  })

  function inserirEvento(e) {
    e.preventDefault()
    console.log(evento)
  
  function limparFormulario(){
            setEvento({
          titulo: "",
          descricao: "",
          dataInicio: "",
          dataFim: "",
          local: ""
        });
  }
  const [mensagem, setMensagem] = useState("")
    useEffect(()=>{
      setTimeout( ()=> {
        setMensagem("")
      }, 2000)
    }, [mensagem])


    axios.post('http://localhost:3000/eventos', evento)
      .then(resultado => {
        console.log(resultado.data);
        limparFormulario()
        setMensagem("Cadastro realizado com sucesso.");
      })
      
      .catch(erro => console.log(erro));
      setMensagem("Houve um erro em seu cadastro.")
  }

  return (
    <>
      <Cabecalho />

      <div className={styles.container}>
        <form onSubmit={e => inserirEvento(e)} className={styles.subcontainer}>
          <div>
            <label htmlFor='titulo'>Titulo:</label>
            <br />
            <input
              id='titulo'
              type='text'
              name='titulo'
              value={evento.titulo}
              onChange={e => setEvento({
                ...evento,
                titulo: e.target.value
              })}
            />
          </div>

          <div>
            <label htmlFor='descricao'>Descrição:</label>
            <br />
            <textarea
              id='descricao'
              cols='20'
              rows='7'
              value={evento.descricao}
              onChange={e => setEvento({
                ...evento,
                descricao: e.target.value
              })}
            />
          </div>

          <div>
            <label htmlFor='dataInicio'>Data de Início:</label>
            <br />
            <input
              id='dataInicio'
              type='date'
              name='dataInicio'
              value={evento.dataInicio}
              onChange={e => setEvento({
                ...evento,
                dataInicio: e.target.value
              })}
            />
          </div>

          <div>
            <label htmlFor='dataFim'>Data de Fim:</label>
            <br />
            <input
              id='dataFim'
              type='date'
              name='dataFim'
              value={evento.dataFim}
              onChange={e => setEvento({
                ...evento,
                dataFim: e.target.value
              })}
            />
          </div>

          <div>
            <label htmlFor='local'>Local:</label>
            <br />
            <input
              id='local'
              type='text'
              name='local'
              value={evento.local}
              onChange={e => setEvento({
                ...evento,
                local: e.target.value
              })}
            />
          </div>

          <button className={styles.button} type='submit'>Cadastrar</button>
        </form>
      </div>
    </>
  )
}