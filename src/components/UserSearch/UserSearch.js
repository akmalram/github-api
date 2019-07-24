import React from 'react';
import withService from '../../hoc/withService';
import { updateData } from '../../action';
import { connect } from 'react-redux';

import {
    Form,
    Input,
    SubmitBtn
} from './UserSearchStyles';

function UserSearch({ updateData, service: { getData } }) {

    const [username, setUserName] = React.useState();
    const [styles, setStyles] = React.useState({});

    const onInputSubmit = (e) => {
        e.preventDefault();
        
        if(username) {
            setStyles({
                borderColor: 'lightgrey'
            })
            getData(`https://api.github.com/users/${username}`).then(user => {
                updateData(user);
            });
        } else {
            setStyles({
                borderColor: 'red'
            })
        }
    }

    const onInput = (e) => {
        if(e.target.value) setUserName(e.target.value);
    } 

    return (
        <Form onSubmit={onInputSubmit}>
            <Input id="inputField" type="text" style={styles} placeholder="type here..." autoFocus onInput={(e) => onInput(e)}  />
            <SubmitBtn type="submit" value="Search" />
        </Form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (payload) => dispatch(updateData(payload)),
    }
}

export default connect(null, mapDispatchToProps)(withService()(UserSearch));
