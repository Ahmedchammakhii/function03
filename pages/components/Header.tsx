import styles from '../../styles/Home.module.css'

export default function Header() {
    return (
        <header id='header' style={{  transition:"cubic-bezier(0.895, 0.03, 0.685, 0.22) all 1s" ,width:"80vw",display:"flex",justifyContent:"center",height:"45svh"}}>
        <div className="main_text" style={{width:"80%",display:"flex",flexDirection:"column",alignItems:"flex-end"}} >
        <div>
        <h1 style={{fontWeight:"200"}}>Ethereum Wallet Explorer 🚀</h1>
          <p style={{fontWeight:"500"}}>Your gateway to seamless Ethereum interactions using Next.js and TypeScript.</p>
          <div className="function03_description" style={{display:"flex",gap:30,fontWeight:"200",marginTop:10}}>
        <p className={styles.circle}>Who are we ?</p>
        <p >We are Web3 data enthusiasts. <span><img src='https://cryptologos.cc/logos/ethereum-eth-logo.png' style={{objectFit:"contain",width:"3%",height:"3%",position:"absolute"}}/></span></p>
        </div>
          </div>  
        
          </div>
        </header>
  )
}
