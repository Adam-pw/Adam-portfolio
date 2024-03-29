import { database }from "../../firebase/firebaseConfig.js";
import React , { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    margin: "3vw 12vw 3vw 12vw",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    // border: `1px solid ${
    //   theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    // }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
      margin: "3vw 6vw 3vw 6vw",
    },
  },

  image: {
    maxWidth: "40%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function Email() {
  const { classes } = useStyles();
  const [email, setEmail] = useState("");
  const addEmail = (e) => {
    e.preventDefault();
    addDoc(collection(database, "email"), {
      email: email,
    });
    setEmail("");
  };

  return (
    <form>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Wait a minute...</Title>
          <Text weight={500} size="lg" mb={5}>
            Subscribe to our newsletter!
          </Text>
          <Text size="sm" color="dimmed">
            You will never miss important product updates, latest news and
            community QA sessions. Our newsletter is once a week, every Sunday.
          </Text>
          <div className={classes.controls}>
            <TextInput
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              classNames={{ input: classes.input, root: classes.inputWrapper }}
            />
            <Button onClick={addEmail} color="gray" className={classes.control}>
              Subscribe
            </Button>
          </div>
        </div>
        <Image src="/images/image.svg" className={classes.image} />
      </div>
    </form>
  );
}
