import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/professor/professor';
import ProfessorCreate from './ProfessorCreate';


const ms2p = (state) => {
  return {
    ...state.professor,
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(ProfessorCreate);
