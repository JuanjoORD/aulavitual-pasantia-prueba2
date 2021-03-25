import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/assignment_student/assignment_for_student';
import MyQualifications from './MyQualifications';


const ms2p = (state) => {
  return {
    ...state.assignment_for_student,
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(MyQualifications);
