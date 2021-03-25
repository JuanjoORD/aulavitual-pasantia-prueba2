import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/event_school/event';
import EventList from './EventList';


const ms2p = (state) => {
  return {
    ...state.event,
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(EventList);
