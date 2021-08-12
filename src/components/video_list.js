import React, { Component } from 'react'
import VideoListItem from './video_list_item';

export default class VideoList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        
        let videoItems = this.props.videos.map((video)=>{
            return (
                <VideoListItem key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect} />
            )
        })

        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        )
    }
}
