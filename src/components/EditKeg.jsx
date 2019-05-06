import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

export default function EditKeg(props) {
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null){
    optionalSelectedKegContent = <Keg selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
    <div>
      {optionalSelectedKegContent}
      <KegList kegList={props.kegList} currentRouterPath={props.currentRouterPath} onKegSelection={props.onKegSelection}/>
    </div>
  );
}

EditKeg.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};
