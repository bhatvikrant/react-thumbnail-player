import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const VideoThumbnail = ({
  preview,
  title,
  message,
  badge,
  badgeBg,
  muted,
  width,
  classname
}) => {
  const onHover = e => {
    e.target.play()
    e.target.nextElementSibling.style.opacity = 0.4
  }

  const offHover = e => {
    e.target.pause()
    e.target.nextElementSibling.style.opacity = 1
  }

  return (
    <div
      style={{ width: width }}
      className={`${styles.videoThumbnail} ${classname}`}
    >
      <div style={{ width: width }} className={styles.video}>
        <video
          onMouseEnter={e => onHover(e)}
          onMouseLeave={e => offHover(e)}
          className={styles.preview}
          src={preview}
          loop
          // autoPlay
          width={width}
          muted={muted}
        />
        <div className={styles.badge} style={{ background: badgeBg }}>
          {badge}
        </div>
      </div>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.views}>{message}</span>
    </div>
  )
}

VideoThumbnail.propTypes = {
  preview: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  badge: PropTypes.string,
  badgeBg: PropTypes.string,
  muted: PropTypes.bool,
  width: PropTypes.number,
  classname: PropTypes.string
}

VideoThumbnail.defaultProps = {
  preview: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
  title: 'Hi, this is a test title',
  message: '2M Watching Now',
  badge: 'Live',
  // badgeBg: 'lightblue',
  muted: false,
  width: 350,
  classname: ''
}

export default VideoThumbnail
