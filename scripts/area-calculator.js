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