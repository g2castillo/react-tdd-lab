import React from 'react';

export default class PhoneNumberInput extends React.Component {
    constructor(props) {
        super(props)

        this.validate = this.validate.bind(this)
        this.change = this.change.bind(this)

        this.state = {
            validation: undefined,
            value: props.value
        }
    }

    validate() {

    }

    change({target: {value}}) {

    }

    componentWillReceiveProps({value}) {
        
    }

    render() {
        return (
            <div>
                <input type="text" className="ft-input" value={this.props.value} />
                <div className={"error"}>{this.state.validation}</div>
            </div>
        )
    }
}
