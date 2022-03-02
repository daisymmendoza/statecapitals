function myFunction() {
    var selectState = ["Arizona", "Illinois", "Oregon", "New York", "California"];
    var arrArizona = ["Phoenix"];
    var arrIllinois = ["Springfield"];
    var arrOregon = ["Salem"]
    var arrNewYork = ["Albany"];
    var arrCalifornia = ["Sacramento"];

    var selectOptions = (document.getElementById("state").value);
    var displayCapitals = document.getElementById("capitals");

    document.getElementById("capitals").innerHTML = "";

    if (selectOptions == "az") {
        for(i = 0; i < arrArizona.length; i++) {
            var sOptions = document.createElement('option');
            console.log(sOptions);
            sOptions.innerHTML = arrArizona[i];
            console.log(sOptions.innerHTML);
            sOptions.value = arrArizona[i];
            displayCapitals.appendChild(sOptions);
        }
    } else if (selectOptions == "illinois") {
        for(i = 0; i < arrIllinois.length; i++) {
            var sOptions = document.createElement('option');
            console.log(sOptions);
            sOptions.innerHTML = arrIllinois[i];
            console.log(sOptions.innerHTML);
            sOptions.value = arrIllinois[i];
            displayCapitals.appendChild(sOptions);
        }
    } else if (selectOptions == "oregon") {
        for(i = 0; i < arrOregon.length; i++) {
            var sOptions = document.createElement('option');
            console.log(sOptions);
            sOptions.innerHTML = arrOregon[i];
            console.log(sOptions.innerHTML);
            sOptions.value = arrOregon[i];
            displayCapitals.appendChild(sOptions);
        }
    } else if (selectOptions == "ny") {
        for(i = 0; i < arrNewYork.length; i++) {
            var sOptions = document.createElement('option');
            console.log(sOptions);
            sOptions.innerHTML = arrNewYork[i];
            console.log(sOptions.innerHTML);
            sOptions.value = arrNewYork[i];
            displayCapitals.appendChild(sOptions);
        }
    } else {
        for(i = 0; i < arrCalifornia.length; i++) {
            var sOptions = document.createElement('option');
            console.log(sOptions);
            sOptions.innerHTML = arrCalifornia[i];
            console.log(sOptions.innerHTML);
            sOptions.value = arrCalifornia[i];
            displayCapitals.appendChild(sOptions);
        }
    }
}