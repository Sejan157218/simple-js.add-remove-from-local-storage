
let addData = {}
const addInput = () =>{
    const inputValue = document.getElementById('input').value;
    if(inputValue in addData){
        addData[inputValue] += 1;
    }
    else{
        addData[inputValue] = 1;
    } 
    displaData(addData);
    localStorage.setItem('data',JSON.stringify(addData))  
}
const removeItem =()=>{
    const getData = JSON.parse(localStorage.getItem('data'))
    const removeValue = document.getElementById('input-value').value;
    if(removeValue in getData){
        if(getData[removeValue]==1){
            delete getData[removeValue];
        }
        else{
            getData[removeValue] -=1;
        }
    }
    localStorage.setItem('data',JSON.stringify(getData))
    displaData(getData);
}



