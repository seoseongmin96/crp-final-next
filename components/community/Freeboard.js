
import styles from "@/styles/freeboard.module.css"
import React, {useState} from 'react'
import axios from "axios";
export function Freeboard () {
  
  return (
    <>
        <h1>자유게시판</h1>
        <div className={styles.container}>
            <htmlForm action="">
            <div className={styles.row}>
                <div className={styles.col25}>
                <label className={styles.label} htmlFor="passengerId">게시글 작성자 ID</label>
                </div>
                <div className={styles.col75}>
                <input type="text"  className={styles.inputText}
                id="passengerId" name="passengerId" placeholder="게시글 작성자 ID 입력"/>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={styles.col75}>
                <input type="text" className={styles.inputText}
                id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col25}>
                <label htmlFor="team">카테고리</label>
                </div>
                <div className={styles.col75}>
                <select id="teamId" name="teamId" >
                    <option value="">선택해주세요</option>
                    <option value="">표절 확인</option>
                    <option value="">악보 분석</option>
                    <option value="">음원 인식</option>
                    <option value="">작곡 프로그램</option>
                    <option value="">기타</option>
                </select>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={styles.col75}>
                <input type="textarea"  id="subject" name="subject" style={{height:500, width:500 + "px"}}></input>
                </div>
            </div>
            <br/>
            <div className={styles.row}>
                <input type="submit"   className={styles.inputSubmit}
                 value="Submit"/>
            </div>
            </htmlForm>
            </div>
    </>)
  
}

