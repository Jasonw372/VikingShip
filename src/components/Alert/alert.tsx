import React, {useState} from "react";
import classNames from "classnames";
import Icon from "../Icon";
import Transition from "../Transition/transition";

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  title: string;
  description?: string;
  type?: AlertType;
  onClose?: () => void;
  closable?: boolean;
}

const Alert: React.FC<AlertProps> = ({title, description, type = 'default', onClose, closable = true}) => {
  const [hide, setHide] = useState(false)
  const classes = classNames('viking-alert', {
    [`viking-alert-${type}`]: type,
  })
  const titleClass = classNames('viking-alert-title', {
    'bold-title': description
  })

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }
  return (

    <Transition in={!hide} timeout={300} animation="zoom-in-top">
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="viking-alert-desc">{description}</p>}
        {closable && <span className="viking-alert-close" onClick={handleClose}><Icon icon={"times"}></Icon></span>}
      </div>
    </Transition>
  )
}

export default Alert