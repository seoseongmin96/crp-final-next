import Image from "next/image";
import img from '@/imgs/logo-crp.jpg'
import Link from 'next/link'
export function Home() {
  return (
    <>
    <h1>CRP를 이용해보세요</h1>
    <a href='/'> <Image src = {img} width={90} height = {50}></Image></a>
    <h1>CRP를 사용하는 이유</h1>
    <div ><Link href='/'>표절검사</Link></div>            
    <div ><Link href='/'>악보분석</Link></div>            
    <div ><Link href='/program/Compose'>작곡 프로그램</Link></div>            

    <h1>CRP에서 음원검색</h1>
    <h1>Contact Us</h1>
    </>
  )
}

