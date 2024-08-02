import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = ({theme, className, ...resetProps}) => {
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme
  })

  return (
    <FontAwesomeIcon className={classes} {...resetProps} />
  )
}

export default Icon;