import React, { Component } from 'react'

import VideoThumbnail from 'react-thumbnail-player'

export default class App extends Component {
	render() {
		return (
			<div>
				<VideoThumbnail
					title='hello yt'
					message='hello this is a msg'
					preview='http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
					width={350}
					muted={true}
					badge='Live'
					badgeBg='blue'
					classname='customClassName'
				/>

				<VideoThumbnail />
			</div>
		)
	}
}
