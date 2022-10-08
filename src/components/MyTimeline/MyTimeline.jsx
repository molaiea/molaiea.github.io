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
                  <AutoAwesomeIcon />
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
          <CustomTimelineItem name={item.name} text={item.text}/>
        ))}

      <FinalTimelineItem name={children[children.length-1].name} text={children[children.length-1].text}/>
    </Timeline>
  )
}

export const CustomTimelineItem = ({name, text}) => (
  <TimelineItem >
          <TimelineSeparator className='separator__padding'>
            <TimelineDot variant='outlined' className='timeline__dot'/>
            <TimelineConnector />
          </TimelineSeparator>
            <TimelineContent className='timeline_content'>
              <span className="item__name">{name}</span>: {text}
            </TimelineContent>
  </TimelineItem>
)

export const FinalTimelineItem = ({name, text}) => (
  <TimelineItem >
          <TimelineSeparator className='separator__padding'>
            <TimelineDot variant='outlined' className='timeline__dot'/>
          </TimelineSeparator>
            <TimelineContent className='timeline_content'>
              <span className="item__name">{name}</span>: {text}
            </TimelineContent>
  </TimelineItem>
)


export default MyTimeline