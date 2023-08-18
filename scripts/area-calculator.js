function calculateTriangleArea(){
    const baseField = document.getElementById("triangle-base")
    const baseValueText = baseField.value 
    const base = parseFloat(baseValueText)
    console.log(base)
    baseField.value =""

    const heightField = document.getElementById("triangle-height")
    const heightValueText = heightField.value ;
    const height = parseFloat(heightValueText);
    console.log(height);

    heightField.value =""

    const area = .5 * base * height
    console.log(area)

    // triangle area 
    const areaSpan = document.getElementById("triangle-area");
    areaSpan.innerText = area
}

function calculateRectangleArea(){
    const widthField = document.getElementById("rectangle-width");
    const widthFieldValueText = widthField.value ;
    const width = parseFloat(widthFieldValueText);
    console.log(width)
    
    widthField.value = ""
    
    const lengthField = document.getElementById("rectangle-length");
    const lengthValueText = lengthField.value ;
    const length = parseFloat(lengthValueText);
    console.log(length)
 
lengthField.value = ""

    const area = width * length;
    areaSpan = document.getElementById("rectangle-area")
    areaSpan.innerText = area;
}

function calculateParallelogramArea(){
    const base = getInputValue("parallelogram-base")
   console.log(base)
//   fieldId.value = ""
   const height = getInputValue('parallelogram-height')
//    fieldId.value = ""
   console.log(height)
   
   const area = base * height;
   
   setElementInnerText('parallelogram-area' , area);
//    fieldId.value = ""
}

function calculateEllipseArea(){
    const majorRadius = getInputValue("ellipse-major-radius")
    console.log('clicked')

    const minorRadius = getInputValue('ellipse-minor-radius')
    console.log('clickedfghdghh')

    const area = 3.1416 * majorRadius * minorRadius
    setElementInnerText("ellipse-area" , area);
}



function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value ;
    const value = parseFloat(inputValueText);
    
    return value ;
}

function setElementInnerText(elementId , area){
    const element = document.getElementById(elementId)
    element.innerText = area;


}

