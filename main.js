var myCalculator = document.getElementById("my-calculator")

// craete main container
const mainContainer = document.createElement("div")
    mainContainer.setAttribute("id", "my-container")
    myCalculator.appendChild(mainContainer)

/* select main container */
const myContainer = document.getElementById("my-container")
    myContainer.dir = "rtl";
    myContainer.style.fontFamily = "system-ui"

// title
const myTitle = document.createElement("h2")
        myTitle.setAttribute("id", "my-title")
const titvarext = document.createTextNode("حاسبــة التغذيــة")
        myTitle.appendChild(titvarext)
        myContainer.appendChild(myTitle)

// inputs
/* create label element */
const labelWeight = document.createElement("label")
        labelWeightText = document.createTextNode("الوزن")
        labelWeight.setAttribute("class", "my-label")

const inputWeight = document.createElement("input")
        inputWeight.setAttribute("id", "my-weight")
        inputWeight.setAttribute("type", "number")
        inputWeight.setAttribute("inputmode", "numeric")
        inputWeight.setAttribute("required", "required")
        labelWeight.appendChild(labelWeightText)
        labelWeight.appendChild(inputWeight)
        myContainer.appendChild(labelWeight)
/* select weight input value */
const myWeight = document.getElementById("my-weight")

/* create label element */
const labelHeight = document.createElement("label")
        labelHeightText = document.createTextNode("الطول")
        labelHeight.setAttribute("class", "my-label")

const inputHeight = document.createElement("input")
        inputHeight.setAttribute("id", "my-height")
        inputHeight.setAttribute("type", "number")
        inputHeight.setAttribute("inputmode", "numeric")
        inputHeight.setAttribute("required", "required")
        labelHeight.appendChild(labelHeightText)
        labelHeight.appendChild(inputHeight)
        myContainer.appendChild(labelHeight)
        
/* select height input value */
const myHeight = document.getElementById("my-height")

// error div
const errorDiv = document.createElement("div")
        errorDiv.setAttribute("id", 'my-error')
        myContainer.appendChild(errorDiv)

/* select height input value */
const myError = document.getElementById("my-height")

// buttom
const inputButton = document.createElement("button")
        inputButton.setAttribute("id", "my-button")
        inputButton.onclick = myCalc;
        inputButtonText = document.createTextNode("أحســب")
        inputButton.appendChild(inputButtonText)
        myContainer.appendChild(inputButton)

/* select height input value */
const myButton = document.getElementById("my-button")

// results table
const resultsTable = document.createElement("table")
        resultsTable.setAttribute("id", "my-results")
        myContainer.appendChild(resultsTable)

/* select results table */
const myResults = document.getElementById("my-results")

// QRcode Image
const myQR = document.createElement("img")
        myQR.setAttribute("id", "my-qr")
        myContainer.appendChild(myQR)

/** select QR code Image */
const myQRImage = document.getElementById("my-qr")

// system link
const myLinkDiv = document.createElement("div")
const myLink = document.createElement("a")
        myLink.setAttribute("id", "my-link")
        myLink.setAttribute("hidden", "true")
        myLinkText = document.createTextNode("عرض النظام الغذائى")
        myLink.appendChild(myLinkText)
        myLinkDiv.appendChild(myLink)
        myContainer.appendChild(myLinkDiv)

/** select system link */
const myHref = document.getElementById("my-link")

// function myCalc
function myCalc() {
    const weight = myWeight.value
    const height = myHeight.value
    const bmi = Number((weight / (height * height) * 10000).toFixed(2))
console.log("bmi = " + bmi)

    const prefectWeight = Number(Math.round(((height * height) * 0.24) / 100))
console.log("P.W. = " + prefectWeight)

    const weightRange = Number(Math.round((weight - prefectWeight) * 0.25  + Number(prefectWeight)))
// console.log("W.R. = " + weightRange)

    var calories = 0

    if (bmi <= 25.5 || bmi > 25.5 && bmi < 26.5) {
        var calories = Math.floor(weightRange * 0.26) * 100
    }

    if (bmi >= 26.5 && bmi < 29.5) {
        var calories = Math.floor(weightRange * 0.25) * 100
    }

    if (bmi >= 29.5 && bmi < 35.5) {
        var calories = Math.floor(weightRange * 0.21) * 100
    }

    if (bmi >= 35.5 && bmi < 40) {
        var calories = Math.floor(weightRange * 0.20) * 100
    }

    if (bmi >= 40) {
        var calories = Math.floor(weightRange * 0.19) * 100
    }

    // console.log("calories = " + calories)

    if (isNaN(bmi) || bmi == 0 || !isFinite(bmi)) {
        document.getElementById("my-error").innerHTML = "<span style='color: #ff0000; margin: 15px;'>يرجى إضافة كافة البيانات المطلوبة بطريقة صحيحة</span>"
        setTimeout(() => {
            document.getElementById("my-error").innerHTML = ""
        }, 5000);
        return
    }

    switch (true) {
        case (calories >= 1200 && calories < 1300) :
            var qrCode = "https://mn1m.com/wp-content/uploads/2022/04/1200qr.png"
            var pressHere = "https://mn1m.com/1200cal"
            break;
    
        case (calories >= 1300 && calories < 1400) :
            var qrCode = "https://mn1m.com/wp-content/uploads/2022/04/1300qr.png"
            var pressHere = "https://mn1m.com/1300cal"
            break;
    
        case (calories >= 1400 && calories < 1500) :
            var qrCode = "https://mn1m.com/wp-content/uploads/2022/04/1400qr.png"
            var pressHere = "https://mn1m.com/1400cal"
            break;
    
        case (calories >= 1500 && calories < 1600) :
            var qrCode = "https://mn1m.com/wp-content/uploads/2022/04/1500qr.png"
            var pressHere = "https://mn1m.com/1500cal"
            break;
    
        case (calories >= 1600 && calories < 1700) :
            var qrCode = "https://mn1m.com/wp-content/uploads/2022/04/1600qr.png"
            var pressHere = "https://mn1m.com/1600cal"
            break;
    
        case (calories >= 1700 && calories < 1800) :
            var qrCode = "https://mn1m.com/wp-content/uploads/2022/04/1700qr.png"
            var pressHere = "https://mn1m.com/1700cal"
            break;
    
        case (calories >= 1800 && calories < 1900) :
            var qrCode = "https://mn1m.com/wp-content/uploads/2022/04/1800qr.png"
            var pressHere = "https://mn1m.com/1800cal"
            break;
    
        case (calories >= 1900 && calories < 2000) :
            var qrCode = "https://mn1m.com/wp-content/uploads/2022/04/1900qr.png"
            var pressHere = "https://mn1m.com/1900cal"
            break;
    
        case (calories >= 2000) :
            var qrCode = "https://mn1m.com/wp-content/uploads/2022/04/2000-1.png"
            var pressHere = "https://mn1m.com/2000cal"
            break;
    
        default:
            var qrCode = ""
            break;
    }

    myResults.innerHTML = '<tr><th style="border:1px solid red;">مؤشر كتلة الجسم الحالي</th><td style="border:1px solid red;">'+ bmi +'</td></tr><tr><th style="border:1px solid red;">الوزن المثالى</th><td style="border:1px solid red;">'+ prefectWeight +'</td></tr><tr><th style="border:1px solid red;">السعرات الحرارية المطلوبة</th><td style="border:1px solid red;">'+ calories +'</td></tr>'

    if (qrCode.length > 0) {
        myQRImage.setAttribute("src", qrCode)
        myQRImage.setAttribute("alt", "qr-" + calories)
        myQRImage.style.width = "50%"
        myQRImage.style.padding = "20px"

        myHref.removeAttribute("hidden")
        myHref.setAttribute("href", pressHere)
    }

    

}

console.table({Developer: "MY-Dev | Mohamed Youssef", website: "http://my-dev.pro"})

// style
/* my-container */
myContainer.style.textAlign = "center"
myContainer.style.backgroundColor = "#ddd"
myContainer.style.margin = "20px"
myContainer.style.padding = "15px 20px"
myContainer.style.borderRadius = "8px"
myContainer.style.width = "max-content"
myContainer.style.fontFamily = "neo-sans-ar_plf"

/* input */

/** Weight */
myWeight.style.margin = "10px"
myWeight.style.height = "33px"
myWeight.style.borderRadius = "4px"
myWeight.style.border = "solid #bababa 1px" 

/** Height */
myHeight.style.margin = "10px"
myHeight.style.height = "33px"
myHeight.style.borderRadius = "4px"
myHeight.style.border = "solid #bababa 1px"


const labelElemnt = document.getElementsByClassName("my-label")
    labelElemnt[0].style.display = "block"
    labelElemnt[1].style.display = "block"

/* button */
inputButton.style.padding = "10px 100px"
inputButton.style.borderRadius = "8px"
inputButton.style.border = "solid #bababa 1px"
inputButton.style.margin = "20px 10px"

inputButton.addEventListener("mouseover", function() {inputButton.style.backgroundColor = "#48b853"; inputButton.style.color = "#fff"})
inputButton.addEventListener("mouseout", function() {inputButton.style.backgroundColor = ""; inputButton.style.color = "#000"})

/* table */
myResults.style.width = "300px"
myResults.style.borderCollapse = "collapse"
myResults.style.marginLeft = "auto"
myResults.style.marginRight = "auto"