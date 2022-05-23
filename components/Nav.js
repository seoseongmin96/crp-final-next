import Link from "next/link";
import Image from "next/image";
import img from '@/imgs/logo/logo-crp.jpg'
import styles from '@/styles/Nav.module.css'

export  function Nav(){
  return (
    <nav className= {styles.nav}>

<hr/>

<ul>

<container className = {styles.container}>

<a href='/'> <Image src = {img} width={100} height = {60}></Image></a>

<div><Link href='/'>회사</Link></div>                
<div><Link href='/company/oursite'>* 사이트소개</Link></div>                
<div><Link href='/company/profile'>* 개발자들</Link></div>                
<div><Link href='/'>커뮤니티</Link></div>                
<div><Link href='/community/customer'>* 1:1문의</Link></div>                
<div><Link href='/community/freeboard'>* 자유게시판</Link></div>                
<div ><Link href='/'>링크</Link></div>                
<div ><Link href='/link/aboutsite'>* 관련사이트</Link></div>                
<div ><Link href='/'>회원가입</Link></div>            
<div ><Link href='/'>로그인</Link></div>            
<div ><Link href='/'>전체기능</Link></div>            

</container>

</ul>

<hr/>

</nav>
  );
};