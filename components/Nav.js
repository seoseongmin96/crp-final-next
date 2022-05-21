import Link from "next/link";
import Image from "next/image";
import img from '@/imgs/logo-crp.jpg'
import styles from '@/styles/Nav.module.css'
export  function Nav(){
  return (
    <nav className= {styles.nav}>

<hr/>

<ul class = "snd_menu sub_menu">

<container className = {styles.container}>

<a href='/'> <Image src = {img} width={90} height = {50}></Image></a>

<div><Link href='/'>회사</Link></div>                
<div><Link href='/'>커뮤니티</Link></div>                
<div ><Link href='/'>링크</Link></div>                
<div ><Link href='/'>회원가입</Link></div>            
<div ><Link href='/'>로그인</Link></div>            
<div ><Link href='/'>전체기능</Link></div>            

</container>

</ul>

<hr/>

</nav>
  );
};