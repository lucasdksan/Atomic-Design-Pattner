import React from "react";

import {
    View
} from "react-native";

import { styles } from "./style";

import {
    ProfileIcon
} from '../../../global/styles/icons';

import { PostAvatar } from "../../atoms/PostAvatar";
import { PostUserName } from "../../atoms/PostUserName";
import { PostLocation } from "../../atoms/PostLocation";



type Props = {
    location: string;
    username: string;
}

export const PostHeader = ({ location, username }: Props) => {
    return (
        <View style={styles.postHeader}>
            <PostAvatar 
                source={ProfileIcon}
            />
            <View>
                <PostUserName value={username}/>
                <PostLocation value={location}/>
            </View>
        </View>
    );
}