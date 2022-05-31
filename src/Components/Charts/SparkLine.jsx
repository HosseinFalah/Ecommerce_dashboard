import React from "react";
import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";

const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
    return (
        <SparklineComponent>
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
  )
}

export default SparkLine;