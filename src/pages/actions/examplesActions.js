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

        2000

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