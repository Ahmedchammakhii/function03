import { useWriteContract } from 'wagmi'
import { parseEther } from 'viem'
import {abi} from "@/hooks/abi"
import { useAccount } from '@/hooks/useAccount'
import { useEffect, useState } from 'react'
import style from "../Check/check.module.css"
import { useRouter } from 'next/router'

const index = () => {
  const {transaction,account} = useAccount();
const [sucess,setsuc]=useState(false)
const [error,seterror]=useState(false)
const [pending,setpending]=useState(true)
const router = useRouter()
  const { writeContract } = useWriteContract()
useEffect(()=>{
  writeContract({ 
    abi,
    address:transaction?.adrc,
    functionName: 'transferFrom',
    args: [
account as `0x${string}`,
      transaction?.adrRec,
      parseEther(transaction?.qu),
    ],
 },{onSuccess:()=>{setsuc(true);setpending(false)},onError:()=>{seterror(true);setpending(false)}})

},[]) 
if (sucess) return <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}> Transaction done ! <p style={{position:"absolute",top:20,left:50,cursor:"pointer"}} onClick={e=>router.back()}>BACK</p>
</div>
if (error) return <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}> An error has occured <p style={{position:"absolute",top:20,left:50,cursor:"pointer"}} onClick={e=>router.back()}>BACK</p>
</div>
if (pending) return <div className={style.load}>
<div className={style.dot}></div>
<div className={style.outline}><span></span></div>
<p style={{position:"absolute",top:20,left:50,cursor:"pointer"}} onClick={e=>router.back()}>BACK</p>

</div>

}

export default index
