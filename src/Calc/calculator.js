const pattern = /\d+/g // соответствует всем вхождениям одной или более цифр
const pattern4 = /\D/g // соответствует всем вхождениям одного символа, который не является цифрой в базовом латинском алфавите

let res = 0;
let resHistory = "";

const resultCalc = (ress,arr,arr4) =>{
    if(ress.includes('.')){
        res = "0";
        resHistory = "Не целое число";

    }else if(arr4[0] === "-" && arr4[1]){
        res = "0";
        resHistory = "Отрицательное число";
    }else if(arr[1] === "0"){
        res = "0";
        resHistory = "Нельзя делить на ноль";
    } else if (arr[1]) {
        if (arr4[0] === "+") {
            res = parseInt(arr[0]) + parseInt(arr[1])
        } else if (arr4[0] === "-") {
            res = parseInt(arr[0]) - parseInt(arr[1]);
        } else if (arr4[0] === "*") {
            res = parseInt(arr[0]) * parseInt(arr[1]);
        } else if (arr4[0] === "/") {
            res = parseInt(arr[0]) / parseInt(arr[1]);
        }
        resHistory = ress + "=" + res;
    }
    return resHistory,res;
}

const calculExamples = ({ress,updateHistoryExamples,updateData}) =>{

    const historyList= [];
    let arr = 0;
    let arr4 = 0;
    // eslint-disable-next-line array-callback-return
    ress.list.map(function(example){
        arr = example.name.match(pattern);
        arr4 = example.name.match(pattern4);

        resultCalc(example.name,arr,arr4);
        historyList.push(resHistory);
        res=0;
    })

    updateData(res);
    updateHistoryExamples(historyList);
};




const calcul = ({ress,updateHistory,updateData}) =>{

    const arr = ress.match(pattern);
    const arr4 = ress.match(pattern4);

    resultCalc(ress,arr,arr4);
    updateData(res);
    updateHistory(resHistory);
};

export default {

    calcul,
    calculExamples,

};
