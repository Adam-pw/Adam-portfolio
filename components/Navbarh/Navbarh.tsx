import React from "react";
import styles from "./Navbar.module.scss";
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  StylesApiProvider,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function Navbarh() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <>
      <Box pb={40}>
        <Header height={60} px="md" fixed={true}>
          <Group position="apart" sx={{ height: "100%" }}>
            {/* <MantineLogo size={30} /> */}
            <b>ADAM</b>
            <Group
              sx={{ height: "100%" }}
              spacing={0}
              className={classes.hiddenMobile}
            >
              <Anchor href="/" className={classes.link}>
                Home
              </Anchor>
              <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a href="#" className={classes.link}>
                  About me
                </a>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <a href="#" className={classes.link}>
                  Projects
                </a>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <a href="#" className={classes.link}>
                  Contact
                </a>
              </Link>
            </Group>
            <Group className={classes.hiddenMobile}>
              <Link href="mailto:adampithewan@gmail.com">
                <Button variant="default">{"Let's Talk"}</Button>
              </Link>
            </Group>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
            />
          </Group>
        </Header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
            <Divider
              my="sm"
              color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
            />

            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              About me
            </a>
            <a href="#" className={classes.link}>
              Projects
            </a>
            <a href="#" className={classes.link}>
              Contact
            </a>
            <Divider
              my="sm"
              color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
            />
            <Group position="center" grow pb="xl" px="md">
              <Link href="adampithewan@gmail.com">
                <Button variant="default">{"Let's Talk"}</Button>
              </Link>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
      <hr className={styles.line}></hr>
    </>
  );
}
