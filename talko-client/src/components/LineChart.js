import React from 'react';
import { Line } from 'react-chartjs-2';

const state = {
    // creates array with values 0 - 99
    labels: Array.from(Array(100).keys()), 
    datasets: [
        {
            label: 'Energy',
            fill: false,
            lineTension: 0.5,
            borderColor: 'white',
            borderWidth: 2,
            pointRadius: 0.1,
            data: [
                0.15804717705851132,
                0.9823222860336408,
                0.9721155990933149,
                0.8876469949617101,
                0.8899375741945893,
                0.9348861674344412,
                0.9521287966650752,
                0.9066197750257862,
                0.8037928229358282,
                0.6736049892518726,
                0.5518937956106095,
                0.46695985385839667,
                0.4332545141990642,
                0.4510423509992633,
                0.509810482150768,
                0.5931974624313614,
                0.6837460861020475,
                0.7664760030743424,
                0.8309047529093844,
                0.8716128704711563,
                0.8877208209364034,
                0.8817420191276717,
                0.8582420224362555,
                0.8226223602239775,
                0.7802078014081792,
                0.7356865465519706,
                0.6928579494225282,
                0.6545916891737573,
                0.6228935124382482,
                0.5989950189833441,
                0.583423539208045,
                0.5760478080671962,
                0.5761238357937817,
                0.5823761897057083,
                0.5931418892311832,
                0.6065817102172574,
                0.6209351765744722,
                0.6347705904820475,
                0.6471690489281653,
                0.6577868397446087,
                0.6667649443545776,
                0.6744929289533546,
                0.6812785630089866,
                0.6870119541193459,
                0.6909328468782604,
                0.6916021050472426,
                0.6871408850997519,
                0.6757373797952957,
                0.6563425616619533,
                0.629401440150999,
                0.5974155165221248,
                0.5651243648181843,
                0.5391416285590224,
                0.5269843607849228,
                0.5355800479353576,
                0.5694957803588968,
                0.6292691600284422,
                0.7102886278280222,
                0.8026408504090132,
                0.8921876769328736,
                0.9628813485963543,
                1.0,
                0.9936707261595545,
                0.9418320734375327,
                0.8517519458552559,
                0.7394285654794996,
                0.6266544275203201,
                0.5361502922167686,
                0.48582509455802414,
                0.48369652334297764,
                0.525101331136733,
                0.5934228704926469,
                0.6646120730696938,
                0.7145382557103955,
                0.72697907415766,
                0.6993655968348985,
                0.6437261339359662,
                0.581700118443456,
                0.5349555105215269,
                0.5148486669406331,
                0.5165548943701846,
                0.5220712787587447,
                0.5125520127551283,
                0.48475668110724907,
                0.4610838004415795,
                0.482331341288194,
                0.5797198560502927,
                0.7381853854808597,
                0.8787603969231375,
                0.890114267818706,
                0.7131530526380332,
                0.427147138550939,
                0.23630605905186033,
                0.28843688744543805,
                0.4393130358565457,
                0.3272562337962203,
                0.0,
                0.177337447340332,
                0.06790026055119765,
                0.03973998765798318
            ]
        }
    ],
    height: '200px'
};

function LineChart(props) {
    return (
        <Line
            data={state}
            options={{
                title:{
                    display: true,
                    fontSize:15
                },
                legend:{
                    display: false
                },
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Energy',
                            fontSize: 18,
                            fontStyle: 'bold',
                            fontColor: '#FFFFFF',
                        },
                        ticks: {
                            display: true,
                            fontColor: '#324F5D'
                        },
                        gridLines: {
                            display: false,
                            drawBorder: true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Time',
                            fontSize: 18,
                            fontStyle: 'bold',
                            fontColor: '#FFFFFF'
                        },
                        ticks: {
                            display: true,
                            fontColor: '#324F5D'
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    }]
                }
            }}
            width={1250}
            height={1150}
        /> 
    );
}

export default LineChart;