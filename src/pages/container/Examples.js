import React from "react";
import { connect } from 'react-redux';
import exaplesActions from '../actions/examplesActions';
import calcul from '../../Calc/calculatorExamples';
import Button from "@material-ui/core/Button";




class Examples extends React.Component{
    render() {
        const {
            exaples,
            updateData,
            updateHistoryExamples,
        }=this.props;
        return(
            <div>
                <button
                    onClick={() => exaplesActions.fetchExapless({

                        examplesCount: 5,

                    })(this.props.dispatch)}
                >
                    Получить примеры
                </button>


                <Button variant="text"
                        onClick={() =>

                            calcul.calculExamples({
                                    updateData: updateData,
                                    updateHistoryExamples: updateHistoryExamples,
                                    ress: exaples,
                                }
                            )}
                >
                    Подсчитать
                </Button>

            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    ...reduxState,
});

const mapDispatchToProps = dispatch => ({

    dispatch,

});

export default connect(mapReduxStateToProps, mapDispatchToProps)(Examples);