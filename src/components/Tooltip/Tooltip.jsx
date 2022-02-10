import React, { useRef } from 'react';
import styles from './Tooltip.module.scss';
import { ReactComponent as LinkIcon } from '../../assets/icons/link_icon.svg';

const Tooltip = ({ children, content, Svg }) => {
  const ref = useRef(null);

  const hide = () => {
    ref.current.style.visibility = 'hidden';
  };

  const show = () => {
    const currentWidth = window.getComputedStyle(ref.current).width;
    ref.current.style.marginLeft = `calc(calc(${currentWidth}/2) * -1)`;
    ref.current.style.visibility = 'visible';
  };

  return (
    <span
      onMouseEnter={show}
      // onFocus={show}
      onMouseLeave={hide}
      // onBlur={hide}
      onClick={hide}
      role="presentation"
      className={styles.wrapper}
    >
      <span className={styles.tooltip} ref={ref}>
        {Svg && <LinkIcon />}
        {content}
      </span>
      <span>{children}</span>
    </span>
  );
};

export default Tooltip;
