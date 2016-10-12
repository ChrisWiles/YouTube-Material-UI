import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import YTSearch from 'youtube-api-search'
import JSONP from 'jsonp'

const googleAutoSuggestURL = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q='


class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.googleAutoSuggest = this.googleAutoSuggest.bind(this)
    this.videoSearch = this.videoSearch.bind(this)
    this.state = {
      videos: [],
      autoSuggest: [],
      inputValue: '',
      selectedVideo: null
    }
  }


  videoSearch(term) {
    console.log(term)
    YTSearch({
      key: KEY,
      term: term,
    }, (videos) => {
      console.log(videos)
      this.setState({
        videos,
        selectedVideo: videos[0],
      })
    })
  }


  mapAutoSuggest(items) {
    const mapped = items[1].map(item => item[0])
    this.setState({autoSuggest: mapped})
  }


  googleAutoSuggest(inputValue) {
    const url = googleAutoSuggestURL + inputValue
    if (inputValue) {
      JSONP(url, (error, data) => {
        if (error)
          return console.log(error)
        this.mapAutoSuggest(data)
      })
    }
  }


  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText="Search"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.autoSuggest}
          onUpdateInput={this.googleAutoSuggest}
          onNewRequest={this.videoSearch}
        />
      </div>
    )
  }
}

export default SearchBar
