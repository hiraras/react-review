import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './ComponentWrapper';

class TestPropsType extends React.Component {
    render() {
        const { message } = this.props;
        return <Wrapper>{ message }</Wrapper>
    }
}
TestPropsType.propTypes = {
    message: PropTypes.string
}
TestPropsType.defaultProps = {
    message: 'default message'
}

export default TestPropsType;
