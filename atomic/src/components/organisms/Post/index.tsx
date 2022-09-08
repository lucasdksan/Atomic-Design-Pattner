import React from "react";

import { View } from "react-native";

import { styles } from "./style";

import { PostHeader } from "../../molecules/PostHeader";
import { PostPhoto } from "../../atoms/PostPhoto";
import { PostOptions } from "../../molecules/PostOptions";
import { PostAbout } from "../../molecules/PostAbout/indext";
import { PostDescription } from "../../atoms/PostDescription";

export type PostProps = {
    id: string;
    username: string;
    location: string;
    likes: string;
    cover: any;
    description: string;
    lastLiked: {
        id: string;
        name: string;
        avatar: any;
    };
}

type Props = {
    data: PostProps;
}

export function Post({ data }:Props) {
    return (
        <View style={styles.post}>
            <PostHeader 
                location={data.location} 
                username={data.username}
            />

            <PostPhoto 
                source={data.cover} 
            />

            <View style={styles.postFooter}>
                <PostOptions />

                <PostAbout 
                    avatar={data.lastLiked.avatar}
                    likes={data.likes}
                />

                <PostDescription value={data.description}/>
            </View>
        </View>
    );
}