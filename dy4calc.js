const displayData=(content)=>{
    res.value+=content
}
const clearScreen=()=>{
    res.value=""
}
const evaluateExpr=()=>{
    try{
        res.value=eval(res.value)
    }catch{
        res.value="Invalid Expression"
    }
}
const delLastnmbr=()=>{
    res.value= res.value.slice(0,-1)
}