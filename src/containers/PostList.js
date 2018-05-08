import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import PostList from '../components/PostList';
import {fetchPosts} from '../actions/post';
import { selectUser } from '../selectors/user';
import { selectPost } from '../selectors/post';

const mapStateToProps = (state) =>  ({posts: selectPost(state), user: selectUser(state)});

const mapDispatchToProps = (dispatch) =>  bindActionCreators({fetchPosts}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
