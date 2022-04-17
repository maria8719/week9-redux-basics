import {connect} from "react-redux"

function CounterRedux(props) {

    const increment = () => {
       props.dispatch({ type: "INCREMENT" });
    }

    const decrement = () => {
        props.dispatch({ type: "DECREMENT" });
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{props.count}</span>
            <button onClick={increment}>+</button>
        </>
    )
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(CounterRedux)

