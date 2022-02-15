import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReactComponent as LinkIcon } from '../../assets/icons/link_icon.svg';
import * as actionCreators from '../../redux/modules/overlay';
import styles from './Tooltip.module.scss';

const Tooltip = ({ children, content }) => {
  const { hideOverlay, showOverlay } = bindActionCreators(actionCreators, useDispatch());
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const hideTooltip = () => {
    setIsVisible(false);
    hideOverlay();
  };

  const showTooltip = () => {
    setIsVisible(true);
    showOverlay();
  };

  useEffect(() => {
    if (!isVisible) return;
    // get rendered width and move tooltip over a half to center it
    const currentWidth = window.getComputedStyle(ref.current).width;
    ref.current.style.marginLeft = `calc(calc(${currentWidth}/2) * -1)`;
    ref.current.style.visibility = 'visible';
  }, [isVisible]);

  return (
    <span
      className={styles.wrapper}
      onClick={hideTooltip}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      role="presentation"
    >
      {isVisible && (
        <span className={styles.tooltip} ref={ref}>
          <LinkIcon /> {content}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired
};

export default Tooltip;
