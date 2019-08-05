import React from 'react';
import Message from "./Message";

export default class WelcomeMessage extends React.Component {
    render() {
        return (
            <Message title={'Lorem ipsum.'}
                     message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur 
                         beatae deserunt dolores, doloribus eius eligendi fuga hic id laborum magni nam optio quae 
                         quo recusandae similique suscipit unde?`}
                         />
        );
    }
}