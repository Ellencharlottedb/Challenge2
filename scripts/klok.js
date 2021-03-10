// Grafiek 1

let myChart = document.getElementById("myChart1").getContext("2d");

Chart.defaults.global.defaultFontFamily="Roboto Mono";
Chart.defaults.global.defaultFontSize=10;
Chart.defaults.global.defaultFontColor="#FFFFFF";

// Dit is de informatie die in mijn grafiek staat, ik heb gekozen voor een donut grafiek.
let luchtChart = new Chart(myChart,{
    type: "doughnut", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:["Stikstof","Zuurstof","Koolstofdioxide"],
        datasets:[{
            label:"Lucht stoffen in percentages",
            data:[78,20,1],
            backgroundColor:["#FCB802","#FF05D9","#00F7A1"],
            hoverColor:"#300067",
            // width: 100%,
        }]
    },
    options:{
        title:{
            display:true,
            text:"Luchtstoffen in percentages",
            // float:"left",
            fontSize: 14
        },
        legend:{
            display:false, //liever true maar dan wordt de grafiek te klein
            // position:"right",
        }

    }
})

// grafiek 2
let myChart2 = document.getElementById("myChart2").getContext("2d");

Chart.defaults.global.defaultFontFamily="Roboto Mono";
Chart.defaults.global.defaultFontSize=10;
Chart.defaults.global.defaultFontColor="#FFFFFF";

// Dit is de informatie die in mijn grafiek staat, ik heb gekozen voor een horizontal bar grafiek.
let gasChart = new Chart(myChart2,{
    type: "horizontalBar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:["Versnellen","Vertragen"],
        datasets:[{
            label:"Acceleratie van SpaceX",
            data:[7000,200],
            backgroundColor:["#FF05D9","#00F7A1"],
            hoverColor:"#300067",
        }]
    },
    options:{
        title:{
            display:true,
            text:"Acceleratie van SpaceX",
            // float:"left",
            fontSize: 14
        },
        legend:{
            display:false,
        }

    }
})

// grafiek 3
let myChart3 = document.getElementById("myChart3").getContext("2d");

Chart.defaults.global.defaultFontFamily="Roboto Mono";
Chart.defaults.global.defaultFontSize=10;
Chart.defaults.global.defaultFontColor="#FFFFFF";

// Dit is de informatie die in mijn grafiek staat, ik heb gekozen voor een donut bar grafiek.
let brandstofChart = new Chart(myChart3,{
    type: "doughnut", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:["Brandstof"],
        datasets:[{
            label:"Brandstof in percentages",
            data:[90,10],
            backgroundColor:["#FCB802"],
            hoverColor:"#300067",
        }]
    },
    options:{
        title:{
            display:true,
            text:"Brandstof in percentages",
            // float:"left",
            fontSize: 14
        },
        legend:{
            display:false, //liever true maar dan wordt de grafiek te klein
            // position:"right",
        }

    }
})