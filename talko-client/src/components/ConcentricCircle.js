import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


function ConcentricCircle(props) {
    const { title, size, fontType, fontColor, label, outerColor, middleColor, innerColor } = props;
    const factor = Math.round(size / 100);
    const useStyles = makeStyles({
        circle: {
            backgroundColor: innerColor,
            width: size,
            height: size,
            borderRadius: '50%',
            boxShadow: `inset 0 0 0 ${factor * 10}px ${outerColor}, inset 0 0 0 ${factor * 15}px ${middleColor}`
        }
    });    
    const classes = useStyles();

    return (
        <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
                <Box position="relative" display="inline-flex">
                    <Box className={classes.circle}></Box>
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant={fontType} component="div" style={{ color: fontColor }}>
                            <b>{label}</b>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            {
                title &&
                <Grid item xs={12}>
                    <Typography variant="h6" component="div" style={{ color: 'white' }}>
                        <b>{title}</b>
                    </Typography>
                </Grid>
            }
        </Grid>
    );
}

export default ConcentricCircle;
