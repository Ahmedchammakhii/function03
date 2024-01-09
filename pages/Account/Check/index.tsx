"use client"
import { useAccount } from "@/hooks/useAccount"
import { Poppins } from "next/font/google"
import { useRouter } from "next/router"
import { useState } from "react"
import { useToken } from "wagmi"
import style from "./check.module.css"
const poppins = Poppins({ weight:["200","300","700","500"],subsets:["latin"] })

const index = () => {
    const router = useRouter()
    const [isdone,setdone]=useState(false)

    const { token  } = useAccount();
    console.log(token);
    
   const result = useToken({
            address: token as `0x${string}`,
          })
          console.log(result , result.data?.address , result.data?.name ,result.data?.totalSupply.formatted);

    if (result.isLoading) return (<div className={style.load}>
    <div className={style.dot}></div>
    <div className={style.outline}><span></span></div>
 </div>)
    if (!result.data) return (<div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>        <p style={{position:"absolute",top:20,left:50,cursor:"pointer"}} onClick={e=>router.back()}>BACK</p>
    <h1>Cant find any data related to th erc20 token !</h1></div>)
  
    return (

    <div className="profile-container">
    <h1>Token Profile</h1>

    <div className="token-info">
        <div>
            <h2>Token Name:</h2>
            <p>{result.data?.name}</p>
        </div>

        <div>
            <h2>Token Symbol:</h2>
            <p>{result.data?.symbol}</p>
        </div>

        <div>
            <h2>Total Supply:</h2>
            <p>{result.data?.totalSupply.formatted}</p>
        </div>
    </div>
    <style>{`
    


    .profile-container {
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display:flex ;
        flex-direction:column ; 
        width:100vw ;
        height :100vh ; 
        align-items: center ;
        justify-content: center;
        gap:50px;
        
    .token-info {
        display:flex ;
        flex-direction:column ; 
        gap:50px;
    }
    }
    

    `}</style>
        <p style={{position:"absolute",top:20,left:50,cursor:"pointer"}} onClick={e=>router.back()}>BACK</p>

</div>
)
}

export default index
