import {connect} from 'react-redux'
import PostList from '../components/PostList';
import {fetchPosts} from '../actions/post'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) =>  ({posts: state.post});
const mapDispatchToProps = (dispatch) =>  ({
  fetchPosts: fetchPosts(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);