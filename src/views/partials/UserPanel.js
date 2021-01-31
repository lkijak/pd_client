import React, { Component } from 'react'

export class UserPanel extends Component {
    render() {
        return (
            <section className="c-dashboard o-flex o-flex--wrap o-flex--space-between u-padding-none u-bg-color--6 o-flex--lock-top js-dashboard">
                {this.props.children}
            </section>
        )
    }
}

export default UserPanel
