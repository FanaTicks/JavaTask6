const initialState = {

    isLoading: false,
    isError: false,

    list: [],

    name: "Exaple",

};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'ERROR_REXEIVE_EXAMPLES':{
            return {
                ...state,
                isError: false,
                isLoading: true,
            }
        }

        case 'REQUEST_EXAMPLES': {

            return {

                ...state,

                isLoading: true,

            };

        }

        case 'RECEIVE_EXAMPLES': {

            const {

                exaples,

            } = action;

            return {

                ...state,

                isLoading: false,

                list: exaples,

            };

        }

        default: return state;

    }

};