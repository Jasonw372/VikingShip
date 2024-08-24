import React, {FC} from "react";
import {ThemeProps} from "../Icon/icon";

export interface ProgressProps {
  percent: number,
  strokeHeight?: number,
  showText?: boolean,
  styles?: React.CSSProperties,
  theme?: ThemeProps
}

const Progress: FC<ProgressProps> = ({percent, strokeHeight = 15, showText = true, styles, theme = "primary"}) => {
  return (
    <div className="viking-progress-bar" style={styles}>
      <div className="viking-progress-bar-outer" style={{height: `${strokeHeight}px`}}>
        <div
          className={`viking-progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

export default Progress;