import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this)
    this.state = {
      dataSource: [],
      inputValue: ''
    }
  }

  onUpdateInput(inputValue) {
    console.log(inputValue)
  }

  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText="Search"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.dataSource}
          onUpdateInput={this.onUpdateInput}
          maxSearchResults={20}
        />
      </div>
    )
  }
}

export default SearchBar
