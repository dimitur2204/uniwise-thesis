import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

export default class RadioExampleRadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
          <Radio
            name='radioGroup'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
    )
  }
}