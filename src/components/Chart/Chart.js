import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const maxArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...maxArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          id={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
