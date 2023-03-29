import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import styles from '../../../styles/custom-tooltip.module.scss'
const CustomTooltip = ({children, tooltip}) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className={styles.tooltip} {...props}>
      {tooltip}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
}

export default CustomTooltip