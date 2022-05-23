import Image from "next/image";
import Link from 'next/link'
export function Home() {
  return (
    <>
    <h1>CRP를 이용해보세요</h1>
    <img src="https://i0.wp.com/grokonline.com.au/wp-content/uploads/2021/01/img-4857.jpg?fit=598%2C513&ssl=1" alt="Alps" style={{width:500}}/>
    <h1>CRP를 사용하는 이유</h1>
    <div ><Link href='/'>표절검사</Link></div>            
    <div ><Link href='/program/plagiarism/plagiarismselect'> * 표절검사등록창</Link></div>            
    <div ><Link href='/program/plagiarism/plagiarism'> * 표절검사확인창</Link></div>            
    <div ><Link href='/'>악보분석</Link></div>            
    <div ><Link href='/program/anaylsis/anaylsisselect'> * 악보분석등록창</Link></div>            
    <div ><Link href='/program/anaylsis/anaylsis'> * 악보분석확인창</Link></div>            
    <div ><Link href='/program/compose/compose'>작곡 프로그램</Link></div>            

    <h1>CRP에서 음원검색</h1>
    <div ><Link href='/program/search/musicsearch'>음원검색</Link></div>            
    <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTBfMTQx/MDAxNTgzODM0NzEwMzUy.64QopZU58BPJonLWXWGhS-hEs16PwGWur1uZMCp1qWgg.LAJnNTRXFpgQ6hhGsXsL-tr27Uv8MuET_TcNAZicFm4g.PNG.mount2014/%EC%9D%B4%EB%AF%B8%EC%A7%80_118.png?type=w800" alt="Alps" style={{width:500}}/>
    <h1>Contact Us</h1>
    <img src="https://sitechecker.pro/wp-content/uploads/2017/12/contact-us-page.png" alt="Alps" style={{width:500}}/>
    </>
  )
}

