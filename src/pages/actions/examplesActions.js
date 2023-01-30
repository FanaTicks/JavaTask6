const receiveExapless = exaples => ({
    exaples,
    type: 'RECEIVE_EXAMPLES'
});

const requestExapless = () => ({
    type: 'REQUEST_EXAMPLES'
});

const errorReceiveExapless = () => ({
    type: 'ERROR_RECEIVE_EXAMPLES'
});

const getExapless = (examplesCount) => new Promise((onSuccess) => {

    setTimeout(

        () => onSuccess(Array

            .from(new Array(examplesCount).keys())

            .map(index => ({ name: `3+${index}`}))),

        1000

        /* or
             return  fetch('http://localhost:8080/math/expamples/4', {
                 method: 'GET',
                 withCredentials: true,
                 crossorigin: true,
                 mode: 'no-cors',
             })
                 .then((res) => res.json())
                 .then((data) => {
                 console.log(data);
             })
                 .catch((error) => {
                 console.log(error);
             })*/
    );

});

const fetchExapless = ({ examplesCount }) => (dispatch) => {

    dispatch(requestExapless());

    return getExapless(examplesCount)

        .then(exaples => dispatch(receiveExapless(exaples)))

        .catch(() => dispatch(errorReceiveExapless()));

};

export default {

    fetchExapless,

};