const generate = document.getElementById(`genera`);

generate.addEventListener(`click`,
    function() {
        const myName = document.getElementById('myName')
        console.log(myName);
        document.getElementById("name_passenger").innerHTML = myName.value
    }
)