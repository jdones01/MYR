import Canvas from "../components/layouts/Canvas";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/**
 * This makes sure we are getting what we think we should
 */
Canvas.propTypes = {
    editor: PropTypes.object.isRequired,
    scene: PropTypes.object.isRequired,
};

/**
 * This makes the values accessible as props
 * @param {*} state Entire redux store state
 */
const mapStateToProps = state => ({
    editor: state.editor,
    scene: state.scene,
});


/**
 * This does the binding to the redux store
 */
export default connect(
    mapStateToProps,
)(Canvas);
