import React from 'react';
import LocationListMenu from '../components/locationListMenu';

import styles from './attachList.scss';

export default (Component, pageType) => {
  const ListAndReportDetials = props => <div className={styles.listAndReportDetails}>
    <Component {...props}/>
    <LocationListMenu {...props} pageType={pageType}/>
  </div>;
  return ListAndReportDetials;
};