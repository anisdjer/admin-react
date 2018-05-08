import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import Navbar from '../components/Navbar';
import { selectUser } from '../selectors/user';

const mapStateToProps = (state) =>  ({user: selectUser(state)});

const mapDispatchToProps = (dispatch) =>  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);