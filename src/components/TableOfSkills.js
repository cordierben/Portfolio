import '../style/Skills.css';
import { animated, useTransition } from "react-spring";
import React, { useState,useEffect } from 'react'
import {FaGitAlt,FaJava,FaDocker,FaPython,FaSwift,FaGuitar,FaDrum} from 'react-icons/fa'
import {SiArduino,SiCsharp, SiAudacity} from 'react-icons/si'
import {DiPhotoshop,DiAndroid} from 'react-icons/di';

function TableOfSkills() {

    const[icons,setIcons]=useState([[<FaGitAlt id={1} color={'white'}/>,1],[<FaJava id={2} color={'white'}/>,1],[<FaDocker id={3} color={'white'}/>,1],[<SiArduino id={4} color={'white'}/>,1],[<FaPython id={5} color={'white'}/>,1],[<SiCsharp id={6} color={'white'}/>,1],[<DiPhotoshop id={7} color={'white'}/>,1],[<DiAndroid id={8} color={'white'}/>,1],[<FaSwift id={9} color={'white'}/>,1],[<FaGuitar id={10} color={'white'}/>,0],[<FaDrum id={11} color={'white'}/>,0],[<SiAudacity id={12} color={'white'}/>,0]])
    const[case1,setCase1]=useState(icons[0][0])
    const[case2,setCase2]=useState(icons[1][0])
    const[case3,setCase3]=useState(icons[2][0])
    const[case4,setCase4]=useState(icons[3][0])
    const[case5,setCase5]=useState(icons[4][0])
    const[case6,setCase6]=useState(icons[5][0])
    const[case7,setCase7]=useState(icons[6][0])
    const[case8,setCase8]=useState(icons[7][0])
    const[case9,setCase9]=useState(icons[8][0])


  const MINUTE_MS = 5000;
  useEffect(() => {
    const interval = setInterval(() => {
        updateIcon()
    }, MINUTE_MS);  
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function updateIcon(){
    let valid=false
        let icon=null;
        let rand1=null;
        while(valid==false){
            rand1=getRandomInt(icons.length)
            if(icons[rand1][1]==0){
                icon=icons[rand1][0]
                valid=true
                
            }
        }
        let rand2=getRandomInt(9)
        let change=null;
        if(rand2==0) {change=case1;setCase1(icon)}
        if(rand2==1) {change=case2;setCase2(icon)}
        if(rand2==2) {change=case3;setCase3(icon)}
        if(rand2==3) {change=case4;setCase4(icon)}
        if(rand2==4) {change=case5;setCase5(icon)}
        if(rand2==5) {change=case6;setCase6(icon)}
        if(rand2==6) {change=case7;setCase7(icon)}
        if(rand2==7) {change=case8;setCase8(icon)}
        if(rand2==8) {change=case9;setCase9(icon)}
        for(let i=0;i<icons.length;i=i+1){
          if(icons[i][0].props.id==change.props.id){
              let tab=icons
              tab[rand1][1]=1
              tab[i][1]=0
              
              setIcons(tab)
          }
        }
  }

  

  return (
    <div id="else">
            <h3>But also...</h3>
            <table>
              <td>
                <tr>{case1}</tr>
                <tr>{case2}</tr>
                <tr>{case3}</tr>
              </td>
              <td>
                <tr>{case4}</tr>
                <tr>{case5}</tr>
                <tr>{case6}</tr>
              </td>
              <td>
                <tr>{case7}</tr>
                <tr>{case8}</tr>
                <tr>{case9}</tr>
              </td>
            </table>
          </div>
  )
}

export default TableOfSkills;





