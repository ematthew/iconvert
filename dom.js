  
let input = document.getElementById("naira");
let submit = document.getElementById("button");
let table = document.getElementById("myNaira");

let denominator = {
    denMethod:function processAmount(){ 
        let amount=input.value;
        let amountMth = [];
        let countMth = [];
        let Obj = {};
        
        let arr = [1000, 500, 200, 100, 50, 20, 10, 5];
        for (let i = 0; i < arr.length; i++) {
            let count = Math.floor(amount/arr[i]);
            if (count > 0) {
                amountMth.push(arr[i]);
                countMth.push(count);
                amount%=arr[i]; 
            }
        }
        Obj.amountMth = amountMth;
        Obj.countMth = countMth;
        return Obj;
    }
}

let UI = {
    uiMethod: function displayResult() {
        let newObject = denominator.denMethod();
        let amountMth = newObject.amountMth; 
        let countMth = newObject.countMth;
        for (let i= 0; i < amountMth.length; i++) {
            let n = document.createElement("tr");
            n.innerHTML = `<td>${amountMth[i] + " x " + countMth[i]}</td><td>${amountMth[i]*countMth[i]}</td>`;
            table.append(n);
        }   
    }
};

submit.addEventListener("click",UI.uiMethod);

// submit.addEventListener("click",function moneyConverter (e){
//     e.preventDefault();
//     let amount=input.value;
//     let amountMth = [];
//     let countMth = [];
    
//     let arr = [1000, 500, 200, 100, 50, 20, 10, 5];
//     for (let i = 0; i < arr.length; i++) {
//         let count = Math.floor(amount/arr[i]);
//         if (count > 0) {
//             let n = document.createElement("tr");
//             n.innerHTML = `<td>${arr[i] + " x " + count}</td><td>${arr[i]*count}</td>`;
//             table.append(n);
//             amount%=arr[i]; 
//         }
//     }
//     var td = document.getElementsByTagName('td');
//     for(var i =0; i < td.length; i++){
//     td[i].style.backgroundColor = '#A9cce3';
// }
// });






