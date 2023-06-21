import { OpenPageContext, OpenState } from "../context";
import { Reactish } from "../reactish";

export const Resume = () => {

    const {setOpenState} = Reactish.useContext(OpenPageContext);

    type Axis = [string, string];
    type DataUnit = [string, number];
    type Data = [string, number | string][];
    const axis: Axis = ['Month', 'Weight'];

    const initData: Data = [axis, ['2023-04', 300], ['2023-05', 400]];

    const [data, setData] = Reactish.useState(initData);
    const [subsequentRun, setSubsequentRun] = Reactish.useState(false);
    setSubsequentRun(true);

    const addData = () => {
        const dataUnit: DataUnit = [
            (document.getElementById("date") as HTMLInputElement).value, 
            parseInt((document.getElementById("weight") as HTMLInputElement).value)
        ]
        data.push(dataUnit)

        console.log(data);
        setData(data);
    }

    const chart = () => {
        const drawChart = () => {
            const chartData = google.visualization.arrayToDataTable(data);
    
            const  options = {
                title: "Theodor's weight",
                curveType: 'function',
                legend: { position: 'bottom' }
            };
    
            const  chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    
            chart.draw(chartData, options);
        }
        const google = (window as any).google;
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
    }

    if(subsequentRun) {
        return <div id="resume">
            <button class="btn-close"  onclick={() => setOpenState(OpenState.CLOSING)}>
            <div class="cross"></div>
            </button>
            <h1>resume</h1>
            <p class="animate-text">
                <div id="curve_chart" style="width: 90%; height: 500px">{chart()}</div>
                <input id="weight" type="number" />
                <input id="date" type="month" />
                <button onclick={() => {addData()}}>Submit</button>
            </p>
        </div>
    } else {
        return <></>
    }
}