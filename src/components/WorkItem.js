import '../style/Works.css';
import React from 'react'
import { Progress } from '../objects/Progress';
import handleViewport from 'react-in-viewport';


function WorkItem(props) {
  
  return (
    <div className="item">
        <ViewportProgress/>
        <div id="itemDesc">
            <div id="idItem"><div id="number">{props.id}</div> // {props.type}</div>
            <div><h2>{props.title}</h2></div>
            <div id="itemDescription">{props.desc}</div>
            <a id="itemLink" href={props.link}>View Website!</a>
        </div>
        <div id="itemLogo">
          {window.innerWidth>750?(
            <a href={props.link}>
              <img id="itemImage" src={props.image} width={props.size} style={{marginLeft:props.margin}} ></img>
            </a>
          ):(
            <a href={props.link}>
              <img id="itemImage" src={props.image} width={props.sizeMobile} style={{marginLeft:props.marginMobile}}></img>
            </a>
          )}
        </div>
        
    </div>
  )
}

export default WorkItem;

const Backend = (props) => {
    const { inViewport, forwardedRef, enterCount } = props;
    let width=0;
    if(window.innerWidth>750) width=window.innerWidth-350
    else width=window.innerWidth-100
    if (enterCount >= 1) {
        return (
            <div ref={forwardedRef} >
              <Progress width={width} percent={1}/>
            </div>
        )
    }
    return (
        <div ref={forwardedRef}>
            <Progress width={width} percent={0}/>
        </div>
    );
  }
  const ViewportProgress = handleViewport(Backend);