import React from 'react'
import './MyTimeline.css'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Timeline from '@mui/lab/Timeline';
import { Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const MyTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className="timeline">
        <TimelineItem className='first__item'>
            <TimelineSeparator>
                <TimelineDot className='timeline__dot__header'>
                  {icon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant='h6' className='timeline__header'>
                  {title}
                </Typography>
            </TimelineContent>
        </TimelineItem>

        {children.slice(0,-1).map((item) => (
          <CustomTimelineItem name={item.name} text={item.text} detail={item.detail}/>
        ))}

      <FinalTimelineItem name={children[children.length-1].name} text={children[children.length-1].text} detail={children[children.length-1].detail}/>
    </Timeline>
  )
}

export const CustomTimelineItem = ({name, text, detail}) => (
  <TimelineItem >
          <TimelineSeparator className='separator__padding'>
            <TimelineDot variant='outlined' className='timeline__dot'/>
            <TimelineConnector />
          </TimelineSeparator>
            <TimelineContent className='timeline_content'>
              {detail ? <div>
                <span className="item__name">{name}</span> <br />
                <span >{text}</span> <br />
                <span >{detail}</span>
              </div> : <div>
                <span className="item__name">{name}</span>: {text}</div>}
              
            </TimelineContent>
  </TimelineItem>
)

export const FinalTimelineItem = ({name, text, detail}) => (
  <TimelineItem >
          <TimelineSeparator className='separator__padding'>
            <TimelineDot variant='outlined' className='timeline__dot'/>
          </TimelineSeparator>
          <TimelineContent className='timeline_content'>
              {detail ? <div>
                <span className="item__name">{name}</span> <br />
                <span >{text}</span>
                <span >{detail}</span>
              </div> : <div>
                <span className="item__name">{name}</span>: {text}</div>}
              
            </TimelineContent>
  </TimelineItem>
)


export default MyTimeline