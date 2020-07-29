import React from 'react';
import Wrapper from './ComponentWrapper';

// class TransformRef extends React.Component {
    
//     render() {
//         console.log(this)
//         return <Wrapper>
//             <input ref={this.ref} />
//             {this.props.children}
//         </Wrapper>
//     }
// }
const TransformRef = React.forwardRef((props, ref) => {
    console.log('props.children:', props.children)
    console.log('React.Children.count:', React.Children.count(props.children));
    console.log('React.Children.toArray:', React.Children.toArray(props.children))
    React.Children.map(props.children, (item) => {
        console.log(item)
    })
    return <Wrapper>
        <input ref={ref} />
        {props.children}
    </Wrapper>
})

export default TransformRef;
