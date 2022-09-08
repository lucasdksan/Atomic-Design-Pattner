import React from "react";

import { FlatList } from "react-native";
import { Post, PostProps } from "../../organisms/Post";

import { styles } from "./style";

type Props = {
    data: PostProps[];
}

export function Posts({ data }: Props) {
    return (
        <FlatList
            data={data}
            style={styles.posts}
            showsVerticalScrollIndicator={false}
            keyExtractor={data => data.id}
            renderItem={({ item }) => (
                <Post data={item} />
            )}
        />
    );
}