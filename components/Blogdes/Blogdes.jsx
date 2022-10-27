import { createStyles, Text, Avatar, Group } from "@mantine/core";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));
import styles from "./Blogdes.module.scss";
import { database } from "../../firebase/firebaseConfig.js";

export function Blogdes( {arr}) {
  const { classes } = useStyles();
  return (
    <div className={styles.main}>
      <Group>
        <Avatar src="/" alt="dhgkjdkjkh" radius="xl" />
        <div>
          <Text size="sm">Adam Pithenwala</Text>
            <Text size="xs" color="dimmed">
            {arr.data.title}
            </Text>
        </div>
      </Group>
        <Text className={classes.body} size="sm">
        {arr.data.content}
        </Text>
    </div>
  );
}
 