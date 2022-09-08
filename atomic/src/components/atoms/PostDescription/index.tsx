import React from "react";

import { Text, TextProps } from "react-native";

import { styles } from "./style";

type Props = TextProps & {
    value: string;
}

export const PostDescription = ({ value }:Props)=> {
    return(
        <Text style={styles.description}>{value}</Text>
    );
}