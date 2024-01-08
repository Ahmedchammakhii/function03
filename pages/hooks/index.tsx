'use client'

import { useAccount } from "../../hooks/useAccount";





const Index = () => {
    const { account, updateAccount } = useAccount();

 return (
  <div>account</div>
 )
  
}

export default Index