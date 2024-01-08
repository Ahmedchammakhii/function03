import React, { useState } from 'react'

const YourWallet = () => {4
    const [adress,setadr]=useState("")
const [adressDest,setadrDest]=useState("")

  return (
    <div style={{width:"90vw",height:"50vh"}}>
    <h1 style={{fontWeight:100}}>Your Wallet</h1>
    <div className='walletlisting' style={{width:"100%",height:"100%",display:"flex",justifyContent:"space-between"}}>
    <div className='wallet' style={{height:"80%",width:"20%",background:"#b5e9d0",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:20}}> <img src="https://www.pngkey.com/png/full/264-2645391_ethereum-white-logo.png" style={{width:"70%",height:"40%",objectFit:"contain",}} />
     <h1 style={{color:"#6a7b9a",fontWeight:300}}>ETH WALLET</h1>
     </div>
    <div className='serach' style={{width:"40%",height:"80%",background:"#deebe5",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:20,borderRadius:"2rem"}}>
    
    <h3 style={{background:"#fff",borderRadius:"2rem",fontWeight:100,padding:"10px 10px"}}>PLEASE ENTER A VALID CONTRACT ADRESS : </h3>
    <input onChange={e=>setadr(e.target.value)} type="text" placeholder="Enter ERPC-20" style={{width:"70%",background:"#c2dacf",padding:"10px",color:"#72a891",border:0 , borderRadius:"2rem"}} />
    <button style={{width:"30%",background:"#6a7b9a",padding:"20px",color:"#fff",border:0 , borderRadius:"2rem"}} >Search</button>
    
    </div>
    </div>
    <style>{`
    @media screen and (max-width:700px) {
        .walletlisting {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap:20px;
            height:70vh !important
        }

        .wallet {
            width:70vw !important;
            height:30vh !important;
        }
        .serach {
            width:70vw !important;
            height:30vh !important;
        }
    }
    
    `}</style>
    </div>
  )
}

export default YourWallet
