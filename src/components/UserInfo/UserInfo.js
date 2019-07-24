import React from 'react';
import { connect } from 'react-redux';

import {
    Wrapper,
    Msg,
    Img,
    Name,
    Location,
    Email,
    Bio,
    Link,
    List
} from './UserInfoStyles';

function UserInfo(props)  {

    const { user } = props;
    const { msg } = user;

    if(user.success) {

        const {name, location, email, bio, html_url, avatar_url} = user.data;

        return (
            <Wrapper>
                <Img src={avatar_url} alt={name} />
                <List>
                    <Name>Name: {name}</Name>
                    <Location>Location: {location}</Location>
                    <Email>Email: {email}</Email>
                    <Bio>Bio: {bio}</Bio>
                </List>
                <Link href={html_url} target="_blank" rel="noopener noreferrer">Show more</Link>
            </Wrapper>
        )
    }else if(user.field) {
        return (
            <Wrapper>
                <Msg>{ msg }</Msg>
            </Wrapper>
        )
    }
}

const mapStateToProps = ({user, loading}) => ({user, loading});

export default connect(mapStateToProps)(UserInfo);
