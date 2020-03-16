import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import VideoThumbnail from 'react-thumbnail-player'

export default class App extends Component {
	render() {
		return (
			<Container>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<Row>
					<Col>
						<h1 className='text-center'>react-thumbnail-player DEMO</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<h6 className='text-center'>
							<a href='https://bhatvikrant.github.io/react-thumbnail-player/'>
								Visit the Documentation
							</a>
						</h6>
					</Col>
				</Row>
				<br />
				<br />
				<br />
				<Row>
					<Col lg={6}>
						<VideoThumbnail
							title='Test video'
							message='Add a message / body here'
							preview='http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
							width={350}
							muted={true}
							badge='Recorded'
							badgeBg='red'
							classname='customClassName'
						/>
						<br />
						<h6 className='text-center'>
							Video plays on hover{' '}
							<b>
								without Sound
								<span role='img' aria-label=''>
									🔕
								</span>
							</b>
						</h6>
						<br />
						<br />
						<br />
					</Col>
					<Col lg={6}>
						<VideoThumbnail />
						<br />
						<h6 className='text-center'>
							Video plays on hover{' '}
							<b>
								with Sound
								<span role='img' aria-label=''>
									🔔
								</span>
							</b>
						</h6>
						<br />
						<br />
						<br />
					</Col>
				</Row>
			</Container>
		)
	}
}
