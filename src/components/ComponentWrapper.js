import React from 'react';

class Wrapper extends React.Component {
    render() {
        const { name, children } = this.props;
        const isDefault = !children || Array.isArray(children)
        const title = name || (isDefault ? 'component': children?.type?.name) || 'component';
        return <fieldset>
            <legend>{ title }</legend>
            <div>{this.props.children}</div>
        </fieldset>
    }
}

export default Wrapper;
