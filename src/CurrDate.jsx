import React from 'react';

let curDate = new Date(2024, 6, 30, 14);
curDate = curDate.getHours();
let greeting = " ";
let cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning';
  cssStyle.color = "Green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = 'Good Afternoon';
  cssStyle.color = "Orange";
} else {
  greeting = 'Good Night';
  cssStyle.color = "Black";
}

function CurrDate(){
    return(
        <>
      <div>
        <h1>
          Hello Sir, <span style={cssStyle}> {greeting} </span>
        </h1>
      </div>
    </>
  )
}

export default CurrDate;