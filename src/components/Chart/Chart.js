import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBar
          id={dataPoint.label}
          value={dataPoint.value}
          max={null}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
