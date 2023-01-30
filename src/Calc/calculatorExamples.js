
const calculExamples = ({ress,updateHistoryExamples,updateData}) =>{
    let res = 0;
    let resHistory = "";

    const pattern = /\d+/g // соответствует всем вхождениям одной или более цифр
    const pattern4 = /\D/g // соответствует всем вхождениям одного символа, который не является цифрой в базовом латинском алфавите
    const historyList= [];
    let arr = 0;
    let arr4 = 0;
    // eslint-disable-next-line array-callback-return
    ress.list.map(function(example){
        arr = example.name.match(pattern);
        arr4 = example.name.match(pattern4);

        if(example.name.includes('.')){
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
            resHistory = example.name + "=" + res;
        }
        historyList.push(resHistory);
        res=0;
    })

    updateData(res);
    updateHistoryExamples(historyList);
};

export default {

    calculExamples,

};
