function showVet(vet){
    document.getElementById('result').style.display = 'flex'
    document.getElementById('first-num').innerHTML = vet[0]
    document.getElementById('second-num').innerHTML = vet[1]
    document.getElementById('third-num').innerHTML = vet[2]
    document.getElementById('fourth-num').innerHTML = vet[3]

}

function reverseOrder(){
    let vet = []
    vet.push(document.getElementById('vetor-num1').value)
    vet.push(document.getElementById('vetor-num2').value)
    vet.push(document.getElementById('vetor-num3').value)
    vet.push(document.getElementById('vetor-num4').value)


    let veti = [vet.length]
    for(let i = 0; i < vet.length; i++){
        veti[vet.length - 1 - i] = vet[i]
    }
    showVet(veti)
}

function ascendingOrder(){
    let vet = []
    vet.push(document.getElementById('vetor-num1').value)
    vet.push(document.getElementById('vetor-num2').value)
    vet.push(document.getElementById('vetor-num3').value)
    vet.push(document.getElementById('vetor-num4').value)
s
    let num
    for(let i = 0; i < vet.length; i++){
        for(let j = i; j < vet.length; j++){ 
            if(vet[j] < vet[i]){
                num = vet[i]
                vet[i] = vet[j]
                vet[j] = num
            }
        }
    }
    showVet(vet)
}

document.getElementById('org-vet-inv').addEventListener('click', function() {
    reverseOrder()
})

document.getElementById('org-vet-cre').addEventListener('click', function() {
    ascendingOrder()
})