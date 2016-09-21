import React from 'react';
import ReactDOM from 'react-dom';

class AvatarCreator extends React.Component{

    constructor(props){
        super(props);

        this.state = { avatars : [] };
    }

    render(){
        return(
            <div>
            <h1>Avatar Creator</h1>
            <AvatarForm avatars={this.state.avatars} />
            <div className="foo" />
            </div>
        )
    }

}


ReactDOM.render(
    <AvatarCreator />, document.getElementById('app')
)

export default AvatarCreator;    