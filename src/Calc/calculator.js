
const calcul = ({ress,updateHistory,updateData}) =>{
    let res = 0;
    let resHistory = "";

    const pattern = /\d+/g // соответствует всем вхождениям одной или более цифр
    const pattern4 = /\D/g // соответствует всем вхождениям одного символа, который не является цифрой в базовом латинском алфавите

    const arr = ress.match(pattern);
    const arr4 = ress.match(pattern4);

    if(ress.includes('.')){
        res = "Не целое число";
        resHistory = "Не целое число";

    }else if (arr[1]) {
        if (arr4[0] === "+") {
            res = parseInt(arr[0]) + parseInt(arr[1])
        } else if (arr4[0] === "-") {
            res = parseInt(arr[0]) - parseInt(arr[1]);
        } else if (arr4[0] === "*") {
            res = parseInt(arr[0]) * parseInt(arr[1]);
        } else if (arr4[0] === "/") {
            res = parseInt(arr[0]) / parseInt(arr[1]);
        }
        if (String(res)==="Infinity"){
            res = "Нельзя делить на ноль";
        }
        resHistory = ress + "=" + res;
    }
    updateData(res);
    updateHistory(resHistory);
};

export default {

    calcul,

};
