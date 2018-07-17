import React from 'react';
import LocationListMenu from '../components/locationListMenu';

import styles from './attachList.scss';

export default (Component) => {
  const ListAndReportDetials = props => <div className={styles.listAndReportDetails}>
    <LocationListMenu {...props}/>
    <Component {...props}/>
  </div>;
  return ListAndReportDetials;
};