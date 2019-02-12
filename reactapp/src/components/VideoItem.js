import React from 'react';

const VideoItem = (props) =>
{
    return(
        <div>{props.video.snippet.channelTitle}</div>
    )
}

export default VideoItem;