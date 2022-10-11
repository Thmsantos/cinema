import './App.css';
import Axios from 'axios'
import React,{useState, useEffect} from "react"

function App() {

  useEffect(() => {
      Axios.get('http://localhost:3001/cinema/get')
      .then((res) =>{
        console.log(res.data)
        /* orfa primeiro horario */
        setOrfa_Filme(res.data[0].Filme)
        setOrfa_Sala(res.data[0].Sala)
        setOrfa_Duracao(res.data[0].Duracao)
        setOrfa_Horario(res.data[0].Horario)
        setOrfa_sinopse(res.data[0].Sinopse)

        /* orfa segundo horario */
        set_segundoHorarioOrfa_Horario(res.data[1].Horario)
  
       /*  nao se preoucupe querida */
        set_Nsepreoucupe_filme(res.data[2].Filme)
        set_Nsepreoucupe_sala(res.data[2].Sala)
        set_Nsepreoucupe_duracao(res.data[2].Duracao)
        set_nsepreocupe_Horario(res.data[2].Horario)
        set_nsepreocupe_Sinopse(res.data[2].Sinopse)

        /* o telefone preto */

        set_telefone_filme(res.data[3].Filme)
        set_telefone_sala(res.data[3].Sala)
        set_telefone_duracao(res.data[3].Duracao)
        set_telefone_Horario(res.data[3].Horario) 
        set_telefone_sinopse(res.data[3].Sinopse)

        /* a mulher rei primeiro horario */
        set_mulher_rei_filme(res.data[4].Filme)
        set_mulher_rei_sala(res.data[4].Sala)
        set_mulher_rei_duracao(res.data[4].Duracao)
        set_mulher_rei_Horario(res.data[4].Horario)
        set_mulher_rei_sinopse(res.data[4].Sinopse)

        /* a mulher rei segundo horario */
        set_mulherRei_segundoHorario_Horario(res.data[5].Horario)

         /* avatar */

        set_avatar_filme(res.data[6].Filme)
        set_avatar_sala(res.data[6].Sala)
        set_avatar_duracao(res.data[6].Duracao)
        set_avatar_Horario(res.data[6].Horario)
        set_avatar_sinopse(res.data[6].Sinopse)

         /* sorria */

         set_sorria_filme(res.data[7].Filme)
         set_sorria_sala(res.data[7].Sala)
         set_sorria_duracao(res.data[7].Duracao)
         set_sorria_Horario(res.data[7].Horario)
         set_sorria_sinopse(res.data[7].Sinopse)

         /* a Queda */

         set_aQueda_filme(res.data[8].Filme)
         set_aQueda_sala(res.data[8].Sala)
         set_aQueda_duracao(res.data[8].Duracao)
         set_aQueda_Horario(res.data[8].Horario)
         set_aQueda_sinopse(res.data[8].Sinopse)

          /* a Queda segundo horario */
          set_aQueda_segundoHorario_Horario(res.data[9].Horario)

      })

  },[])


  const [Orfa_filme,setOrfa_Filme] = useState("")
  const [Orfa_sala,setOrfa_Sala] = useState("")
  const [Orfa_duracao, setOrfa_Duracao] = useState("")
  const [Orfa_horario, setOrfa_Horario] = useState("")
  const [Orfa_sinopse, setOrfa_sinopse] = useState("")
  const [Orfa_segundoHorario_horario, set_segundoHorarioOrfa_Horario] = useState("")
  const [orfaIngressos_primeiroHorario, setOrfaIngressos_primeiroHorario] = useState(100);
  const [faturamento_orfa_primeiroHorario, setFaturamento_orfa_primeiroHorario] = useState(0);
  const [orfaIngressos_segundoHorario, setOrfaIngressos_segundoHorario] = useState(100);
  const [faturamento_orfa_segundoHorario, setFaturamento_orfa_segundoHorario] = useState(0);

  const [nsepreocupe_filme, set_Nsepreoucupe_filme] = useState("")
  const [nsepreocupe_sala, set_Nsepreoucupe_sala] = useState("")
  const [nsepreocupe_duracao, set_Nsepreoucupe_duracao] = useState("")
  const [nsepreocupe_horario, set_nsepreocupe_Horario] = useState("")
  const [nsepreocupe_sinopse, set_nsepreocupe_Sinopse] = useState("")
  const [nsepreocupe_ingressos, setNsepreocupeIngressos] = useState(120);
  const [nsepreocupe_faturamento, setNsepreocupe_faturamento] = useState(0);

  const [telefone_filme, set_telefone_filme] = useState("")
  const [telefone_sala, set_telefone_sala] = useState("")
  const [telefone_duracao, set_telefone_duracao] = useState("")
  const [telefone_horario, set_telefone_Horario] = useState("")
  const [telefone_sinopse, set_telefone_sinopse] = useState("")
  const [telefone_ingressos, setTelefoneIngressos] = useState(110);
  const [telefone_faturamento, setTelefone_faturamento] = useState(0);

  const [mulher_rei_filme, set_mulher_rei_filme] = useState("")
  const [mulher_rei_sala, set_mulher_rei_sala] = useState("")
  const [mulher_rei_duracao, set_mulher_rei_duracao] = useState("")
  const [mulher_rei_horario, set_mulher_rei_Horario] = useState("")
  const [mulher_rei_sinopse, set_mulher_rei_sinopse] = useState("")
  const [mulherRei_segundoHorario_horario, set_mulherRei_segundoHorario_Horario] = useState("")
  const [mulherRei_ingressos_primeiroHorario, setmulherRei_ingressos_primeiroHorario] = useState(90);
  const [faturamento_mulherRei_primeiroHorario, setFaturamento_mulherRei_primeiroHorario] = useState(0);
  const [mulherRei_ingressos_segundoHorario, setmulherRei_ingressos_segundoHorario] = useState(90);
  const [faturamento_mulherRei_segundoHorario, setFaturamento_mulherRei_segundoHorario] = useState(0);

  const [avatar_filme, set_avatar_filme] = useState("")
  const [avatar_sala, set_avatar_sala] = useState("")
  const [avatar_duracao, set_avatar_duracao] = useState("")
  const [avatar_horario, set_avatar_Horario] = useState("")
  const [avatar_sinopse, set_avatar_sinopse] = useState("")
  const [avatar_ingressos, setAvatar_ingressos] = useState(100);
  const [faturamento_avatar, setFaturamento_avatar] = useState(0);

  const [sorria_filme, set_sorria_filme] = useState("")
  const [sorria_sala, set_sorria_sala] = useState("")
  const [sorria_duracao, set_sorria_duracao] = useState("")
  const [sorria_horario, set_sorria_Horario] = useState("")
  const [sorria_sinopse, set_sorria_sinopse] = useState("")
  const [sorria_ingressos, setsorria_ingressos] = useState(90);
  const [faturamento_sorria, setFaturamento_sorria] = useState(0);


  const [aQueda_filme, set_aQueda_filme] = useState("")
  const [aQueda_sala, set_aQueda_sala] = useState("")
  const [aQueda_duracao, set_aQueda_duracao] = useState("")
  const [aQueda_horario, set_aQueda_Horario] = useState("")
  const [aQueda_sinopse, set_aQueda_sinopse] = useState("")
  const [aQueda_segundoHorario_horario, set_aQueda_segundoHorario_Horario] = useState("")
  const [aQueda_ingressos_primeiroHorario, setaQueda_ingressos_primeiroHorario] = useState(150);
  const [faturamento_aQueda_primeiroHorario, setFaturamento_aQueda_primeiroHorario] = useState(0);
  const [aQueda_ingressos_segundoHorario, setaQueda_ingressos_segundoHorario] = useState(150);
  const [faturamento_aQueda_segundoHorario, setFaturamento_aQueda_segundoHorario] = useState(0);


  const [toogleOrfa_primeiroHorario, setToogleOrfa_primeiroHorario] = React.useState(true);
  const [corOrfa_primeiroHorario, setCorOrfa_primeiroHorario] = React.useState('#2fdda9');
  
  React.useEffect(() => {
    if (orfaIngressos_primeiroHorario < 99){
        setCorOrfa_primeiroHorario((state) => toogleOrfa_primeiroHorario ? '#FFFF73': '#FFFF73');
        setToogleOrfa_primeiroHorario(state => !state)
    }
    if (orfaIngressos_primeiroHorario < 50){
        setCorOrfa_primeiroHorario((state) => toogleOrfa_primeiroHorario ? '#448431': '#448431');
        setToogleOrfa_primeiroHorario(state => !state)
    }
    if (orfaIngressos_primeiroHorario < 25){
        setCorOrfa_primeiroHorario((state) => toogleOrfa_primeiroHorario ? '#FFFF00': '#FFFF00');
        setToogleOrfa_primeiroHorario(state => !state)
    }
  }, [toogleOrfa_primeiroHorario]);

  
  return (
    <div className="App">
      <div className="container">

         
          <div className="linha_um">
                <p style={{backgroundColor:corOrfa_primeiroHorario}} className='um'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{Orfa_sinopse}</span>
                    </div>
                    <p className='sala'>Sala: {Orfa_sala}</p>
                    <p className='filme'>Filme: {Orfa_filme}</p>
                    <p className='duracao'>Duração: {Orfa_duracao}</p>
                    <p className='horario'>Horário: {Orfa_horario}</p>
                    <p className='restantes'>Ingressos_Restantes: {orfaIngressos_primeiroHorario}</p>
                    <p className='arrecadao'>Arrecadado: {faturamento_orfa_primeiroHorario}$</p>
                    <button className='comprar' onClick={() => setOrfaIngressos_primeiroHorario(orfaIngressos_primeiroHorario - 1)}>Comprar</button>
                    <button className='ver_arrecadacao' onClick={() => setFaturamento_orfa_primeiroHorario((100 - orfaIngressos_primeiroHorario) * 30)}>ver arrecadao</button>
                    <button onClick={e => setToogleOrfa_primeiroHorario(state => !state)}>Alterar</button>
                </p>
            
                <p className='dois'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{Orfa_sinopse}</span>
                    </div>
                    <p className='sala'>Sala: {Orfa_sala}</p>
                    <p className='filme'>Filme: {Orfa_filme}</p>
                    <p className='duracao'>Duração: {Orfa_duracao}</p>
                    <p className='horario'>Horário: {Orfa_segundoHorario_horario}</p>
                    <p className='restantes'>Ingressos_Restantes: {orfaIngressos_segundoHorario}</p>
                    <p className='arrecadao'>Arrecadado: {faturamento_orfa_segundoHorario}$</p>
                    <button className='comprar' onClick={() => setOrfaIngressos_segundoHorario(orfaIngressos_segundoHorario - 1)}>Comprar</button>
                    <button className='ver_arrecadacao' onClick={() => setFaturamento_orfa_segundoHorario((100 - orfaIngressos_segundoHorario) * 30)}>ver arrecadao</button>
                </p>
          </div>

          <div className="linha_dois">
              <p className='tres'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{nsepreocupe_sinopse}</span>
                    </div>
                    <p className='sala'>Sala: {nsepreocupe_sala}</p>
                    <p className='filme'>Filme: {nsepreocupe_filme}</p>
                    <p className='duracao'>Duração: {nsepreocupe_duracao}</p>
                    <p className='horario'>Horário: {nsepreocupe_horario}</p>
                    <p className='restantes'>Ingressos_Restantes: {nsepreocupe_ingressos}</p>
                    <p className='arrecadao'>Arrecadado: {nsepreocupe_faturamento}$</p>
                    <button className='comprar' onClick={() => setNsepreocupeIngressos(nsepreocupe_ingressos - 1)}>Comprar</button>
                    <button className='ver_arrecadacao' onClick={() => setNsepreocupe_faturamento((120 - nsepreocupe_ingressos) * 30)}>ver arrecadao</button>
              </p>

              <p className='quatro'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{telefone_sinopse}</span>
                    </div>
                    <p className='sala'>Sala: {telefone_sala}</p>
                    <p className='filme'>Filme: {telefone_filme}</p>
                    <p className='duracao'>Duração: {telefone_duracao}</p>
                    <p className='horario'>Horário: {telefone_horario}</p>
                    <p className='restantes'>Ingressos_Restantes: {telefone_ingressos}</p>
                    <p className='arrecadao'>Arrecadado: {telefone_faturamento}$</p>
                    <button className='comprar' onClick={() => setTelefoneIngressos(telefone_ingressos - 1)}>Comprar</button>
                    <button className='ver_arrecadacao' onClick={() => setTelefone_faturamento((110 - telefone_ingressos) * 30)}>ver arrecadao</button>
              </p>
          </div>

          <div className="linha_tres">
              <p className='cinco'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{mulher_rei_sinopse}</span>
                    </div>
                    <p className='sala'>Sala: {mulher_rei_sala}</p>
                    <p className='filme'>Filme: {mulher_rei_filme}</p>
                    <p className='duracao'>Duração: {mulher_rei_duracao}</p>
                    <p className='horario'>Horário: {mulher_rei_horario}</p>
                    <p className='restantes'>Ingressos_Restantes: {mulherRei_ingressos_primeiroHorario}</p>
                    <p className='arrecadao'>Arrecadado: {faturamento_mulherRei_primeiroHorario}$</p>
                    <button className='comprar' onClick={() => setmulherRei_ingressos_primeiroHorario(mulherRei_ingressos_primeiroHorario - 1)}>Comprar</button>
                    <button className='ver_arrecadacao' onClick={() => setFaturamento_mulherRei_primeiroHorario((90 - mulherRei_ingressos_primeiroHorario) * 30)}>ver arrecadao</button>
              </p>
            
              <p className='seis'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{mulher_rei_sinopse}</span>
                    </div>
                    <p className='sala'>Sala: {mulher_rei_sala}</p>
                    <p className='filme'>Filme: {mulher_rei_filme}</p>
                    <p className='duracao'>Duração: {mulher_rei_duracao}</p>
                    <p className='horario'>Horário: {mulherRei_segundoHorario_horario}</p>
                    <p className='restantes'>Ingressos_Restantes: {mulherRei_ingressos_segundoHorario}</p>
                    <p className='arrecadao'>Arrecadado: {faturamento_mulherRei_segundoHorario}$</p>
                    <button className='comprar' onClick={() => setmulherRei_ingressos_segundoHorario(mulherRei_ingressos_segundoHorario - 1)}>Comprar</button>
                    <button className='ver_arrecadacao' onClick={() => setFaturamento_mulherRei_segundoHorario((90 - mulherRei_ingressos_segundoHorario) * 30)}>ver arrecadao</button>
              </p>
          </div>

          <div className="linha_quatro">
            <p className='sete'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{avatar_sinopse}</span>
                    </div>
                    <p className='sala'>Sala: {avatar_sala}</p>
                    <p className='filme'>Filme: {avatar_filme}</p>
                    <p className='duracao'>Duração: {avatar_duracao}</p>
                    <p className='horario'>Horário: {avatar_horario}</p>
                    <p className='restantes'>Ingressos_Restantes: {avatar_ingressos}</p>
                    <p className='arrecadao'>Arrecadado: {faturamento_avatar}$</p>
                    <button className='comprar' onClick={() => setAvatar_ingressos(avatar_ingressos - 1)}>Comprar</button>
                    <button className='ver_arrecadacao' onClick={() => setFaturamento_avatar((100 - avatar_ingressos) * 30)}>ver arrecadao</button>
            </p>
            
            <p className='oito'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{sorria_sinopse}</span>
                    </div>
                    <p className='sala'>Sala: {sorria_sala}</p>
                    <p className='filme'>Filme: {sorria_filme}</p>
                    <p className='duracao'>Duração: {sorria_duracao}</p>
                    <p className='horario'>Horário: {sorria_horario}</p>
                    <p className='restantes'>Ingressos_Restantes: {sorria_ingressos}</p>
                    <p className='arrecadao'>Arrecadado: {faturamento_sorria}$</p>
                    <button className='comprar' onClick={() => setsorria_ingressos(sorria_ingressos - 1)}>Comprar</button>
                    <button className='ver_arrecadacao' onClick={() => setFaturamento_sorria((90 - sorria_ingressos) * 30)}>ver arrecadao</button>
            </p>
          </div>

          <div className="linha_cinco">
              <p className='nove'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{aQueda_sinopse}</span>
                    </div>
                    <p className='sala'>Sala: {aQueda_sala}</p>
                    <p className='filme'>Filme: {aQueda_filme}</p>
                    <p className='duracao'>Duração: {aQueda_duracao}</p>
                    <p className='horario'>Horário: {aQueda_horario}</p>
                    <p className='restantes'>Ingressos_Restantes: {aQueda_ingressos_primeiroHorario}</p>
                    <p className='arrecadao'>Arrecadado: {faturamento_aQueda_primeiroHorario}$</p>
                    <button className='comprar' onClick={() => setaQueda_ingressos_primeiroHorario(aQueda_ingressos_primeiroHorario - 1)}>Comprar</button>
                    <button className='ver_arrecadacao' onClick={() => setFaturamento_aQueda_primeiroHorario((150 - aQueda_ingressos_primeiroHorario) * 30)}>ver arrecadao</button>
              </p>
          
              <p className='dez'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{aQueda_sinopse}</span>
                    </div>
                    <p className='sala'>Sala: {aQueda_sala}</p>
                    <p className='filme'>Filme: {aQueda_filme}</p>
                    <p className='duracao'>Duração: {aQueda_duracao}</p>
                    <p className='horario'>Horário: {aQueda_segundoHorario_horario}</p>
                    <p className='restantes'>Ingressos_Restantes: {aQueda_ingressos_segundoHorario}</p>
                    <p className='arrecadao'>Arrecadado: {faturamento_aQueda_segundoHorario}$</p>
                    <button className='comprar' onClick={() => setaQueda_ingressos_segundoHorario(aQueda_ingressos_segundoHorario - 1)}>Comprar</button>
                    <button className='ver_arrecadacao' onClick={() => setFaturamento_aQueda_segundoHorario((150 - aQueda_ingressos_segundoHorario) * 30)}>ver arrecadao</button>
              </p>
          </div>
      </div>
    </div>
  );
}

export default App;
