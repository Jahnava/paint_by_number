
  // hard-coded the image size for now, should be able to get it from the object itself, but haven't done that yet
   var imageHeight = 485;
   var imageWidth = 468;



  var gridHeight;
  var gridWidth;
  var boxHeight;
  var boxWidth;

  var borderSize = 3;

  var boxCount;


function calculateGrid(numRows, numCols){

  // calculate how big each div has to be to fit in the image size, assuming 1 pixel border on each side
  gridHeight =  Math.round(imageHeight/numRows)-borderSize*2;
  gridWidth =  Math.round(imageWidth/numCols)-borderSize*2;
  boxHeight = gridHeight + "px";    // add px so it is a string in the right format
  boxWidth = gridWidth + "px";      // add px so it is a string in the right format
}


function makeGrid(numRows, numCols){

  var myBackground = document.getElementById("backgroundImage");    // set a variable equal to the element with that ID so we can refer to it later

  var newGrid = "";     // start with an empty string that will be built up
  boxCount = 0;     // this counter has one added every time a box is made, so we can number the box IDs better


  calculateGrid(numRows, numCols);


  // start for loop to build the string
    for (i=0;i<numRows;i++){

        // add  <div class="row">  to the string
        newGrid = newGrid + `<div class="row" id="row_${i}">\n\r`;    // add a row up to the number of rows (this opens the div, it gets closed later)

      for (j=0;j<numCols;j++){

        boxCount= boxCount+1;   // add one to the box counter, then use the boxCount in the div ID part of the HTML
        var thisBoxId = "box_"+boxCount;
        newGrid = newGrid + `<div class="floating-box" id="box_${boxCount}"></div>\n\r`;   // add a column up to the number of columns


        }     //end inner for loop



        newGrid = newGrid + '</div>\n\r';      // close the row div for each row

      }   //  end outer for loop


    //    console.log("Total new squares added: " + numCols*numRows);


        // set the inside HTML part of the background DIV to be the whole new string the for loops created
        myBackground.innerHTML = newGrid;


        // now that the grid is added to the screen, this set of for loops resets the size on all of the divs
          var resizeCount = 0;
        for (i=0;i<numRows;i++){
          for (j=0;j<numCols;j++){
            resizeCount = resizeCount+1;   // add one to the box counter, then use the boxCount in the div ID part of the HTML
            var thisBoxId = "box_"+resizeCount;
            setBoxSize(thisBoxId, boxHeight, boxWidth);
          }

        }


          console.log("Total Number of Boxes: " + boxCount);



}   // end function makeGrid

function hideClick(){
  var toHide = document.getElementById("textBox").value;
  toHide = "box_" + toHide;
  hide(toHide);
}

function showClick(){
  var toShow = document.getElementById("textBox").value;
  toShow = "box_" + toShow;
  show(toShow);
}

function makeGridClick(){
  var rows = document.getElementById("rows").value;
  var columns = document.getElementById("columns").value;
  makeGrid(rows,columns);
}

function clearAll(){
  for (i=1;i<=boxCount;i++){
  var thisBoxId = "box_"+i;
    hide(thisBoxId);
  }
}

function showAll(){
  for (i=1;i<=boxCount;i++){
  var thisBoxId = "box_"+i;
    show(thisBoxId);
  }
}
// hiding the div object makes the picture behind it visible
function hide(objectId){

  var obj = document.getElementById(objectId);

  var newgridHeight =  gridWidth + borderSize*2;
  var newgridWidth =  gridWidth + borderSize*2;
  var newboxHeight = newgridHeight + "px";    // add px so it is a string in the right format
  var newboxWidth = newgridWidth + "px";      // add px so it is a string in the right format

  var stylePart = `visibility:hidden; width:${newboxWidth}; height:${newboxHeight}; position: fixed;`;


 obj.setAttribute('style','visibility:hidden');
  //obj.setAttribute('style',stylePart);

}


// showing the div blocks the image behind it
function show(objectId){
  var obj = document.getElementById(objectId);

  var newgridHeight =  gridWidth - borderSize*2;
  var newgridWidth =  gridWidth - borderSize*2;
  var newboxHeight = newgridHeight + "px";    // add px so it is a string in the right format
  var newboxWidth = newgridWidth + "px";      // add px so it is a string in the right format

  var stylePart = `visibility:visible; width:${newboxWidth}; height:${newboxHeight};`;

//  obj.setAttribute('style',stylePart);
  obj.setAttribute('style','visibility:visible');
}


function setBoxSize(objectId, boxHeight, boxWidth){
    var obj = document.getElementById(objectId);
  //  console.log(obj);
  //  obj.setAttribute('style',`width:"${boxWidth}", height:"${boxHeight}"`);

    objectId = "#"+objectId;

  document.querySelector(objectId).style.width = boxWidth;
  document.querySelector(objectId).style.height = boxHeight;

//    document.querySelector('.floating-box').style.width = boxWidth;
//    document.querySelector('.floating-box').style.height = boxHeight;

  }








makeGrid(6,3);
