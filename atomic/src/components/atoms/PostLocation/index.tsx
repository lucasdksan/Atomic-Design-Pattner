import React from "react";

import { Text, TextProps } from "react-native";

import { styles } from "./style";

type Props = TextProps & {
    value: string;
}

export const PostLocation = ({ value }:Props)=> {
    return(
        <Text style={styles.postLocation}>{value}</Text>
    );
}