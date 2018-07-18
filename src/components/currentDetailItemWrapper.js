import React from 'react';
import PropTypes from 'prop-types';
import styles from './currentDetailItemWrapper.scss';

const DetailItemWrapper = ({ children, headerText }) => <div className={styles.currentDetailItemWrapper}>
  <h2>{headerText}</h2>
  {children}
</div>;

DetailItemWrapper.propTypes = {
  headerText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DetailItemWrapper;