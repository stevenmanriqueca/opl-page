import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'
import { IData } from '@/data/interface';

interface Props {
    data: IData[]
}

export const UITimeline: React.FC<Props> = ({ data }) => {
    return (
        <Timeline position="alternate"
        // sx={{ backgroundColor: "purple" }}
        >
            {
                data.map(({ id, info, title }) => (
                    <TimelineItem key={id}>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            fontWeight="bolder"
                            color={info.length === 0 || info.indexOf("-") >= 0 ? "red" : "text.seconday"}
                        >
                            {info}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ background: "orange" }} />
                            <TimelineDot sx={info.length === 0 || info.indexOf("-") >= 0 ? { background: "red" } : { background: "orange" }} />
                            <TimelineConnector sx={{ background: "orange" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '18px', px: 2 }}>
                            <Typography variant="h6" fontWeight="bolder" color={info.length === 0 || info.indexOf("-") >= 0 ? "red" : ""}>
                                {title}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                ))
            }
        </Timeline>
    )
}
