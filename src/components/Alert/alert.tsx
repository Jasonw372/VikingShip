import React, {useState} from "react";
import classNames from "classnames";

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
    !hide &&
    <div className={classes}>
      <span className={titleClass}>{title}</span>
      {description && <p className="viking-alert-desc">{description}</p>}
      {closable && <span className="viking-alert-close" onClick={handleClose}>X</span>}
    </div>
  )
}

export default Alert