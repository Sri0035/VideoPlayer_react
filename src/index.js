import React, {Component} from "react";
import ReactDom from "react-dom";
import SearchBar  from "./components/searchbar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyD47ctlkDuE42nqalIzx4XHeawKDG5iV2s";


/*Create a new component. This component should produce  
 some HTML */
 
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch("Think School");
    }        
    
    

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) =>{
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    }
        


    render() {
        return (
         <div>
            <SearchBar onSearchTermChange = { term => this.videoSearch(term)} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
         </div>
        );
    }
}

 /* Take this component's generated HTML and put it 
  on the page (in the DOM) */
  ReactDom.render(<App />, document.querySelector(".container"));