import { connect } from 'react-redux';
import Renderer from './renderer';
import * as UIActions from '../../../actions/ui';
import * as EdgeActions from '../../../actions/edges';


console.log(UIActions)

function mapStateToProps(state, ownProps) {
  return {
    node: ownProps.node,
    selectedNode: state.ui.selectedNode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectNode: (node) => {
      dispatch(UIActions.selectNode(node));
    },

    unselectNode: (node) => {
      dispatch(UIActions.unselectNode());
    },

    toggleEdge: (fromNode, toNode) => {
      dispatch(EdgeActions.toggleEdge(fromNode.id, toNode.id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Renderer);
