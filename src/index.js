import React from 'react'
import * as glamor from 'glamor'
import glamorous from 'glamorous'

export default class Spinner extends React.Component {

  render() {

    const { color, radius, style } = this.props
    
    const AnimatedSVG = glamorous.svg({
      display: 'inline-block',
      width: `${!radius ? 40 : radius}${'px'}`,
      height: `${!radius ? 40 : radius}${'px'}`,
      animation: `${glamor.css.keyframes({
        '100%': { transform: `rotate(360deg)` },
      })} 900ms linear infinite`,
    });

    const Styles = {
      circle: {
        stroke: '#979797',
        strokeOpacity: '0.25'
      },
      segment: {
        stroke: !color ? '#979797' : color
      } 
    }

    return (
      <span style={style}>
        <AnimatedSVG viewBox="0 0 42 42">
          <g 
            fill="none" 
            transform="translate(3 3)" 
            strokeWidth="3">
            <circle 
              style={ Styles.circle } 
              cx="18" 
              cy="18" 
              r="18" />
            <path 
              style={ Styles.segment } 
              d="M36 18c0-9.94-8.06-18-18-18" 
              strokeLinecap="round" 
              strokeLinejoin="round" />
          </g>
        </AnimatedSVG>
      </span>
    )
  }
}
