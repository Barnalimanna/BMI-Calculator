function calculateBMI() {

    var weightTmp = parseFloat(document.getElementById("weight").value).toFixed(2);
    var weightUnit = document.getElementById("wUnit").value;

    var heightTmp = parseFloat(document.getElementById("height").value).toFixed(2);
    var heightUnit = document.getElementById("hUnit").value;

    if (isNaN(weightTmp) || isNaN(heightTmp) || weightTmp <= 0 || heightTmp <= 0) {
        document.getElementById("result").innerText = "Please enter valid weight and height!";
        return;
    }else{


        if(weightUnit=='pound'){
            var weightKg = convertPoundsToKg(weightTmp);
        }else{
            var weightKg = weightTmp;
        }

        if(heightUnit=='cm'){
            var heightMeter = convertCmToMeters(heightTmp);
        }else if(heightUnit=='ft'){
            var heightMeter = convertFeetToMeters(heightTmp);
        }else{
            var heightMeter = heightTmp;
        }

        const bmiData = (weightKg / (heightMeter * heightMeter)).toFixed(2);

        let category = ""; var infoTextData="";

        if (bmiData < 18.5) { 
            category = "Underweight"; 
            infoTextData = "Oho, You should work on yourself.\nYou BMI is "+(18.5-bmiData).toFixed(2)+" less to include within the normal weight.";
        }else if (bmiData < 24.9) { 
            category = "Normal Weight";
            infoTextData = "Wow! Please try to maintain it."; 
        }else if (bmiData < 29.9) { 
            category = "Over Weight"; 
            infoTextData="You have to maintain a healthy life, do excercise, make changes in your food habit.\nYour Bmi is "+(bmiData-24.9).toFixed(2)+" greater to return to normal weight."
        }else { 
            category = "Obesity"; 
            infoTextData = " We strongly belive you, you can go back in a healthy life.";
        }


    
        document.getElementById("result").innerText =   'Your BMI is '+bmiData+' ('+category+')';
        document.getElementById("infoText").innerText =   infoTextData;

    }
}


// Function to convert pounds to kilograms
function convertPoundsToKg($fetchData) {
    var pounds = $fetchData;
    if (!isNaN(pounds)) {
        var kilograms = (pounds * 0.45359237).toFixed(2);
    } else {
        var kilograms = 0;
    }

    return kilograms;
}

// Function to convert feet to meters
function convertFeetToMeters($fetchData) {
    var feet = $fetchData;
    if (!isNaN(feet)) {
        var meters = (feet * 0.3048).toFixed(2);
    } else {
        var meters = 0;
    }
    return meters;
}

// Function to convert centimeters to meters
function convertCmToMeters($fetchData) {
    var cm = $fetchData;
    if (!isNaN(cm)) {
        var meters = (cm / 100).toFixed(2);
    } else {
        var meters = 0;
    }
    return meters;
}





