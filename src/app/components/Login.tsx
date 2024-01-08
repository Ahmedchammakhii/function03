import { useCallback } from 'react';
import styles from '../page.module.css'

const Login = () => {
    const onclick =useCallback(()=>{
        const loginElement = document.querySelector<HTMLDivElement>('#login');
        const loginWrapperElement = document.querySelector<HTMLDivElement>('#login_wrapper');
        const btnElement = document.querySelector<HTMLButtonElement>('#btn');
        const headerEl = document.querySelector<HTMLDivElement>('#header');
        if(headerEl) { headerEl.classList.toggle(styles.up)}
        if (loginElement) {
          loginElement.classList.toggle(styles.full);
        }
        
        if (loginWrapperElement) {
          loginWrapperElement.classList.toggle(styles.login_wrapper_full);
        }
        
        if (btnElement) {
          btnElement.classList.toggle(styles.fade);
        }
        document.querySelector(".loginin_btn")?.classList.toggle(styles.fade);
        document.querySelector(".metamask_header")?.classList.toggle(styles.fade);

        
        },[])
  return (
    <>
      <div className={styles.login} id='login'>
<div className={styles.logn_wrapper} id='login_wrapper'>
<video src='/assets/landing/bg.mp4' loop autoPlay={true} muted style={{zIndex:1,position:"absolute",objectFit:"cover",width:"100%",height:"100%"}}></video>
  <p onClick={onclick} style={{zIndex:2,cursor:"pointer",width:"30%",display:"flex",justifyContent:"center"}} id='btn'>login</p>

</div>

</div>
<div className={"login-header "+styles.mobilelogin} style={{position:"absolute",width:"70vw",display:"flex",pointerEvents:"none",alignItems:"center",color:"#fff",zIndex:50,gap:20,height:"100vh"}}>
  <div className={"metamask_header " + styles.fade}>
  <h1>Connect with MetaMask</h1>
  <p style={{width:"40%"}}>Experience seamless interaction with the Ethereum network by connecting your MetaMask wallet.</p>
<div style={{marginTop:20}}>
<li>Connect to your account via metamask</li>
<li>Do a transaction</li>
</div></div>
<div className={"loginin_btn " +styles.fade} style={{ cursor:"pointer",pointerEvents:"fill",transition:"cubic-bezier(0.895, 0.03, 0.685, 0.22) all 1s",width:"15vw",height:"10vh",borderRadius:"3rem 1rem",background:"#fff",display:"flex",justifyContent:"center",alignItems:"center",color:"#000"}}>
<p>Log In</p>
</div>
</div>
<div className="logintag" style={{position:"absolute",bottom:50,left:10,transform:"rotate(90deg)",color:"#fff"}}>
  <p>-Login</p>
</div>
<div className="logintag" style={{position:"absolute",bottom:50,right:10,transform:"rotate(-90deg)",color:"#fff"}}>
  <p>-Login</p>
</div>
    </>
  )
}

export default Login
