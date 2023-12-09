function findAnimalLegs()        {

    var inputChicken = document.getElementById("inputChicken").value;
    var inputCow = document.getElementById("inputCow").value;
    var inputPig = document.getElementById("inputPig").value;

   

    console.log(inputChicken + '----'+ inputCow + '-----'+ inputPig);

    var legsChicken = inputChicken * 2;
    var legsCow = inputCow * 4;
    var legsPig = inputPig * 4;


    document.getElementById('counterChicken').innerHTML = legsChicken;
    document.getElementById('counterCow').innerHTML = legsCow;
    document.getElementById('counterPig').innerHTML = legsPig;
   
    console.log(inputChicken + '----'+ inputCow + '-----'+ inputPig);

    var totalChickens = inputChicken * 1;
    var totalCows = inputCow * 1;
    var totalPigs = inputPig * 1;
    document.getElementById('totalChickens').innerHTML= totalChickens;
    document.getElementById('totalCows').innerHTML = totalCows;
    document.getElementById('totalPigs').innerHTML = totalPigs;
