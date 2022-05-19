function calculateBmi() {
    var weight = document.urBMI.weight.value
    var height = document.urBMI.height.value
    if (weight > 0 && height > 0) {
        var finalBmi = weight / (height * height)
        document.urBMI.bmi.value = finalBmi.toFixed(3);
        if (finalBmi < 18.5) {
            document.urBMI.meaning.value = "You are thin"
        }
        if (finalBmi > 18.5 && finalBmi < 25) {
            document.urBMI.meaning.value = "You are good"
        }
        if (finalBmi > 25 && finalBmi < 30) {
            document.urBMI.meaning.value = "You are overweighted."
        }
        if (finalBmi > 30 && finalBmi < 35) {
            document.urBMI.meaning.value = "You are obese."
        }
        if (finalBmi > 35) {
            document.urBMI.meaning.value = "You are extremely obese."
        }
    } else {
        alert("Incorect input")
    }

}
