import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

function Infobox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            {/* Title */}
            <Typography className="title" color="textSecondary">
                {title}
            </Typography>
            {/* Number of cases */}
            <h2 className="infobox__cases">{cases}</h2>
            {/* Total */}
            <Typography className="title" color="textSecondary">
            {total}
            </Typography>
        </Card>
    )
}

export default Infobox
