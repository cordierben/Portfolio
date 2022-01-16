import {useEffect,useState} from 'react';
import "../style/Progress.css"

export var Progress =  ({width, percent}) => {
  
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(percent * width);
    });

    return (
        <div>
        <div className="progress-div" style={{ width: width }}>
          <div style={{ width: `${value}px` }} className="progress" />
        </div>
      </div>
    )
}