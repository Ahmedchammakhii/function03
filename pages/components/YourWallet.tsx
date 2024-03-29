import { useAccount } from '@/hooks/useAccount'
import { log } from 'console'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useToken } from 'wagmi'

const YourWallet = () => {
const [adr,setadr]=useState("")
const [adrRec,setadrRec]=useState("")
const [qu,setq]=useState("")
const [adrc,setadrc]=useState("")


const {updateTransaction , account, updateAccount , updateToken ,token} = useAccount();
const [show,setshow]=useState(false)
const [showTr,setshowTr]=useState(false)

const router = useRouter()
const result = useToken({
    address: account as `0x${string}`,
  })


  return (
    <><nav style={{mixBlendMode:"screen",zIndex:1000,width:'90vw',height:"10svh",display:"flex",alignItems:"end",justifyContent:"space-between"}}>
    <svg width="150" height="29" viewBox="0 0 130 25" fill="#101010" xmlns="http://www.w3.org/2000/svg" ><path  d="M7.1191 7.246 c-0.92773 0 -2.1582 -0.039063 -2.1582 1.6406 l0 1.0742 l2.1582 0 l0 2.1582 l-2.1582 0 l0 7.8809 l-2.8027 0 l0 -7.8809 l-1.9629 0 l0 -2.1582 l1.9629 0 l0 -1.084 c0 -3.3887 2.0508 -3.877 4.9609 -3.877 l0 2.2461 z M13.43753125 9.961 l2.8125 0 l0 10.039 l-2.666 0 l-0.068359 -1.2109 c-0.70313 0.88867 -1.8164 1.4063 -3.1934 1.4063 c-2.4121 0 -3.7402 -1.2598 -3.7402 -3.4766 l0 -6.7578 l2.8223 0 l0 6.1523 c0 1.3281 0.83008 1.8164 1.8066 1.8164 c1.1621 0 2.2168 -0.58594 2.2266 -2.4316 l0 -5.5371 z M23.16405 9.766 c2.4121 0 3.7402 1.25 3.7402 3.4766 l0 6.7578 l-2.8223 0 l0 -6.1523 c0 -1.3379 -0.83008 -1.8262 -1.7969 -1.8262 c-1.1621 0 -2.2168 0.58594 -2.2363 2.4414 l0 5.5371 l-2.8125 0 l0 -10.039 l2.8125 0 l0 1.1133 c0.70313 -0.83008 1.7871 -1.3086 3.1152 -1.3086 z M32.2461 20.18555 c-3.1543 0 -5.3809 -2.0996 -5.3809 -5.2148 c0 -3.125 2.2266 -5.2051 5.3809 -5.2051 c2.5391 0 4.4434 1.3184 4.9316 3.6914 l-2.5977 0.2832 c-0.3125 -1.2012 -1.1816 -1.7578 -2.3633 -1.7578 c-1.5137 0 -2.5391 1.1914 -2.5391 2.9883 c0 1.7871 1.0254 2.9883 2.5391 2.9883 c1.1816 0 2.0508 -0.56641 2.3633 -1.7578 l2.5977 0.2832 c-0.48828 2.373 -2.4414 3.7012 -4.9316 3.7012 z M40.99608125 20 c-1.9531 0 -3.0664 -1.1328 -3.0664 -3.1348 l0 -4.7461 l-1.9727 0 l0 -2.1582 l0.63477 0 c1.0645 0 1.6504 -0.41016 1.6504 -1.9141 l0 -1.3281 l2.5391 0 l0 3.2422 l2.0703 0 l0 2.1582 l-2.0703 0 l0 4.4434 c0 0.89844 0.43945 1.2988 1.1621 1.2988 l0.9082 0 l0 2.1387 l-1.8555 0 z M44.540990625 8.457 c-0.88867 0 -1.6309 -0.72266 -1.6309 -1.6211 c0 -0.88867 0.74219 -1.6113 1.6309 -1.6113 c0.86914 0 1.6113 0.72266 1.6113 1.6113 c0 0.89844 -0.74219 1.6211 -1.6113 1.6211 z M43.105490625 20 l0 -10.039 l2.832 0 l0 10.039 l-2.832 0 z M51.60155 20.19531 c-3.1934 0 -5.498 -1.9434 -5.498 -5.2246 c0 -3.2617 2.2852 -5.2051 5.498 -5.2051 c3.2324 0 5.5078 1.9434 5.5078 5.2051 c0 3.2813 -2.2852 5.2246 -5.5078 5.2246 z M51.57225 17.959 c1.6309 0 2.7441 -1.1914 2.7441 -2.9883 s-1.1133 -2.9883 -2.7441 -2.9883 c-1.5723 0 -2.6758 1.1914 -2.6758 2.9883 s1.1035 2.9883 2.6758 2.9883 z M63.2031125 9.766 c2.4121 0 3.7402 1.25 3.7402 3.4766 l0 6.7578 l-2.8223 0 l0 -6.1523 c0 -1.3379 -0.83008 -1.8262 -1.7969 -1.8262 c-1.1621 0 -2.2168 0.58594 -2.2363 2.4414 l0 5.5371 l-2.8125 0 l0 -10.039 l2.8125 0 l0 1.1133 c0.70313 -0.83008 1.7871 -1.3086 3.1152 -1.3086 z M72.2753625 20.19531 c-3.252 0 -5.1172 -2.3828 -5.1172 -7.2559 c0 -4.8828 1.8555 -7.2461 5.1172 -7.2461 c3.2422 0 5.1074 2.3633 5.1074 7.2461 c0 4.873 -1.875 7.2559 -5.1074 7.2559 z M72.2753625 17.6562 c1.416 0 2.2949 -1.4258 2.2949 -4.7168 c0 -3.3203 -0.9082 -4.7168 -2.2949 -4.7168 c-1.416 0 -2.3047 1.3965 -2.3047 4.7168 c0 3.291 0.86914 4.7168 2.3047 4.7168 z M82.25589375 20.19531 c-3.5645 0 -5.0586 -1.748 -5.0586 -5.2344 l2.8809 -0.12695 c0 1.8945 0.2832 2.9102 2.1777 2.9102 c1.4941 0 2.2461 -0.87891 2.2461 -2.0508 c0 -1.377 -0.83984 -2.0508 -2.0508 -2.0508 l-0.54688 0 l0 -2.1875 l0.50781 0 c0.9375 0 1.6309 -0.73242 1.6309 -1.7578 c0 -1.0449 -0.78125 -1.582 -1.8457 -1.582 c-1.5137 0 -1.7578 1.1328 -1.7578 2.2852 l-2.8418 -0.13672 c0 -2.998 1.748 -4.5703 4.5703 -4.5703 c2.627 0 4.4922 1.6504 4.4922 3.7598 c0 1.5332 -0.98633 2.5391 -1.7773 2.8906 c1.2012 0.3418 2.4805 1.377 2.4805 3.4668 c0 2.6563 -2.0215 4.3848 -5.1074 4.3848 z M91.054709375 20 l0 -15 l2.8418 0 l0 15 l-2.8418 0 z M103.115234375 17.2754 c0 1.2305 0.11719 2.0117 0.24414 2.4512 l0 0.27344 l-2.627 0 l-0.22461 -1.0938 c-0.75195 0.9082 -2.0508 1.2891 -3.2227 1.2891 c-1.582 0 -3.125 -0.70313 -3.125 -2.793 c0 -2.0801 1.5527 -2.7832 3.6523 -3.2422 l1.6504 -0.37109 c0.71289 -0.16602 0.9668 -0.41016 0.9668 -0.82031 c0 -0.98633 -0.89844 -1.2598 -1.6895 -1.2598 c-1.0156 0 -1.7871 0.40039 -1.9629 1.5332 l-2.4902 -0.44922 c0.41992 -2.0801 1.9434 -3.0273 4.6094 -3.0273 c2.0117 0 4.2188 0.5957 4.2188 3.623 l0 3.8867 z M98.164034375 18.291 c1.3379 0 2.4121 -0.88867 2.4121 -2.8809 l-2.3828 0.67383 c-0.78125 0.18555 -1.3477 0.45898 -1.3477 1.1328 c0 0.72266 0.5957 1.0742 1.3184 1.0742 z M109.824203125 9.766 c2.6367 0 4.8242 1.9531 4.8242 5.2344 s-2.1875 5.2344 -4.8242 5.2344 c-1.3867 0 -2.5977 -0.55664 -3.1641 -1.543 l-0.068359 1.3086 l-2.666 0 l0 -15 l2.8125 0 l0 6.1816 c0.58594 -0.9082 1.7578 -1.416 3.0859 -1.416 z M109.169903125 17.9004 c1.4941 0 2.666 -1.1035 2.666 -2.9004 c0 -1.8066 -1.1719 -2.9102 -2.666 -2.9102 c-1.4844 0 -2.6563 1.1523 -2.6563 2.9102 s1.1621 2.9004 2.6563 2.9004 z M118.378871875 20.19531 c-2.2559 0 -4.0039 -0.88867 -4.3652 -2.793 l2.3535 -0.66406 c0.30273 1.0742 1.0645 1.4941 2.0117 1.4941 c0.69336 0 1.4453 -0.21484 1.4258 -1.0059 c-0.0097656 -1.0449 -1.5918 -1.1328 -3.1836 -1.6992 c-1.2012 -0.41992 -2.3535 -1.0645 -2.3535 -2.7539 c0 -2.0605 1.709 -3.0078 3.9355 -3.0078 c1.9531 0 3.584 0.74219 3.9746 2.6563 l-2.1777 0.48828 c-0.30273 -0.9375 -0.9668 -1.2695 -1.7871 -1.2695 c-0.74219 0 -1.377 0.26367 -1.377 0.88867 c0 0.79102 1.1621 0.94727 2.4219 1.2891 c1.5527 0.41992 3.252 1.0938 3.252 3.2422 c0 2.3047 -1.9629 3.1348 -4.1309 3.1348 z" fill="parent" opacity="1" data-projection-id="2"  >
    </path></svg>
    <h3 style={{fontWeight:300}}>{ result.data?.name ? 'Welcome Back' + result.data.name : 'welcome back !' }</h3>
    </nav>
   
    <div style={{width:"90vw",height:"95vh"}}>
    <h1 style={{fontWeight:100}}>Your Wallet</h1>
    <div className='walletlisting' style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:50}}>
    <div className='wallet' style={{height:"60%",width:"22%",cursor:"pointer",background:"#b5e9d0",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:20}}> <img src="https://www.pngkey.com/png/full/264-2645391_ethereum-white-logo.png" style={{width:"70%",height:"40%",objectFit:"contain",}} />
     <h1 style={{color:"#6a7b9a",fontWeight:300}}>{
        result.data? result.data.totalSupply.value.toString() : '0 ETH'
}</h1>
<h1 style={{color:"#6a7b9a",fontWeight:300}}>BALANCE </h1>

     </div>
     <div className='wallet' onClick={e=>setshow(true)} style={{height:"60%",width:"22%",cursor:"pointer",background:"#b5e9d0",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:20}}> <img src="https://www.pngkey.com/png/full/264-2645391_ethereum-white-logo.png" style={{width:"70%",height:"40%",objectFit:"contain",}} />
     <h1 style={{color:"#6a7b9a",fontWeight:300}} >Check an adress</h1>
     </div> <div onClick={e=>setshowTr(true)} className='wallet' style={{height:"60%",width:"22%",cursor:"pointer",background:"#7564f2",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:20}}> <img src="https://static.vecteezy.com/system/resources/thumbnails/024/063/335/small/transaction-payment-history-png.png" style={{width:"70%",height:"40%",objectFit:"contain",}} />
     <h1 style={{color:"#fff",fontWeight:300}}>Do a transaction</h1>
     </div>
    </div>
 
    <style>{`
    @media screen and (max-width:700px) {
        .walletlisting {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap:20px;
            height:70vh !important;
            margin-top:200px !important
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
{show && (  <div style={{position:"absolute",top:0,zIndex:2000,width:"90vw",height:"100vh",background:"rgba(222, 235, 229, .9)",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:20}}>
    
    <h3 style={{background:"#fff",fontWeight:100,padding:"10px 10px"}}>PLEASE ENTER A VALID CONTRACT ADRESS : </h3>
    <input onChange={e=>{setadr(e.target.value);
    }} type="text" placeholder="Enter ERPC-20" style={{width:"50%",background:"#c2dacf",padding:"10px",color:"#72a891",border:0  }} />
    <button onClick={e=>{updateToken(adr) ; router.push("/Account/Check")}} style={{cursor:"pointer",width:"30%",background:"#6a7b9a",padding:"20px",color:"#fff",border:0 , borderRadius:"2rem"}} >Search</button>
    <p style={{position:"absolute",top:20,left:50,cursor:"pointer"}} onClick={e=>setshow(false)}>BACK</p>
    </div> 
)}
{showTr && (  <div style={{position:"absolute",top:0,zIndex:2000,width:"90vw",height:"100vh",background:"rgba(222, 235, 229, .9)",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:20}}>
<input onChange={e=>{setadrRec(e.target.value);
    }} type="text" placeholder="Enter RECEPIENT ADRESS" style={{width:"50%",background:"#c2dacf",padding:"10px",color:"#72a891",border:0  }} />
    <input onChange={e=>{setadrc(e.target.value);
    }} type="text" placeholder="Enter CONTRACT ADRESS" style={{width:"50%",background:"#c2dacf",padding:"10px",color:"#72a891",border:0  }} />

    <input onChange={e=>{setq(e.target.value);
    }} type="text" placeholder="Enter QUANTITY" style={{width:"50%",background:"#c2dacf",padding:"10px",color:"#72a891",border:0  }} />
    <button onClick={e=>{updateTransaction({qu,adrc,adrRec}) ; router.push("/Account/Transaction")}} style={{cursor:"pointer",width:"30%",background:"#6a7b9a",padding:"20px",color:"#fff",border:0 , borderRadius:"2rem"}} >TRANSFER</button>
    <p style={{position:"absolute",top:20,left:50,cursor:"pointer"}} onClick={e=>setshowTr(false)}>BACK</p>
    </div> 
)}
    </div>
    </>
  )
}

export default YourWallet
