import React from 'react'; 
import {Line} from 'react-chartjs-2';
function LineCharts(){
const data = {
    labels:['Jan','Feb','March','April','May'],
    datasets:[
    {       
       label:'Sales for 2020 (M)',
       data:[3,2,2,1,5],
       borderColor:['rgba(255,26,86,0.2)'],
       backgroundColor:['rgba(25,206,86,0.2)'],
       pointBackgroundColor:'rgba(25,206,86,0.2)',
       pointBorderColor: 'rgba(255,206,86,0.2)'
    },
    {
        label:'Sales for 2019 (M)',
        data:[1,3,2,2,3],
        borderColor:['rgba(54,162,235,0.2)'],
        backgroundColor:['rgba(54,162,235,0.2)'],
        pointBackgroundColor:'rgba(154,162,235,0.2)',
        pointBorderColor: 'rgba(54,162,235,0.2)'
    }
]
}
// const options={
//     title:{
//         display:true,
//         text:'Line Chart'
//     },
//     scales:{
//         yAxes:[
//             {
//                 ticks:{
//                     min:0,
//                     max:0,
//                     stepSize:1
//                 }
//             }
//         ]
//     }
// }
return(<Line data={data}/>)
}
export default LineCharts;