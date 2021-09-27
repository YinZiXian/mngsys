import React, {Component} from 'react';
import memoryUtils from "../../utils/memoryUtils";
import Redirect from "react-router-dom/es/Redirect";

class Index extends Component {
    render() {
        const user = memoryUtils.user;
        if (!user) {
            return <Redirect to='/login'/>
        }
        return (
            <div>
                Hello, {user}
            </div>
        );
    }
}

export default Index;