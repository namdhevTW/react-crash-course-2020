import React from 'react';

/// Component based approach
class HelloWorld extends React.Component {
    render() {
        return (
            <div className='bg-slate-600 text-white w-full h-full'>
                {this.props.hellomsg} World from React App By Namdhev!
            </div>
        );
    };
}


/// DOM Hook based approach
// function HelloWorld(props) {
//     return(
//         <div className='bg-dark text-white'>
//             {props.hellomsg} World from React App By Namdhev!
//         </div>
//     );
// }

export default HelloWorld;