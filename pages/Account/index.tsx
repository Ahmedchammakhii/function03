'use client'

import Head from "next/head";
import { useAccount } from "../../hooks/useAccount";
import { Poppins } from "next/font/google";
import { useState } from "react";
import YourWallet from "../components/YourWallet";


const poppins = Poppins({ weight:["200","300","700","500"],subsets:["latin"] })

const Index = () => {

    const { account, updateAccount } = useAccount();

  
 return (
    <>
    <Head>
    <title>Account</title>
    <meta name="description" content="technical test for fuction03 Labs" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main className={poppins.className} id='main' style={{maxHeight:"100svh",width:"100vw",display:"flex",alignItems:"center",flexDirection:"column",gap:50}}>
<YourWallet/>
</main>
</> )
  
}

export default Index
