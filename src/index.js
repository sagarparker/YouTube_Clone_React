import _ from 'lodash';
import React,{Component} from 'react';
import { render } from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetails from './components/video_detail';

let API_KEY = 'AIzaSyADNv0zgNxF5pPlBezPfxLrBYjSQGmZVwg';

class App extends Component {

    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };


         this.videoSearch('blockchain');


    }

    videoSearch(term){
        YTSearch({key: API_KEY,term:term},(videos)=>{
            this.setState({ 
                videos:videos,
                selectedVideo:videos[0] 
            });
        });
    }

    render(){

        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},400);

        return(
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetails video={this.state.selectedVideo} />
            <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
        </div>
        )
    }
}

render(<App/>,document.querySelector('.container'));