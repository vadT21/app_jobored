import { useLocation, useNavigate } from "react-router-dom";
import { List } from "@mantine/core";
import { useStyles } from "./NavigationList.style";
import { ROUTE_LINKS } from "../../../constants";

interface NavigationListI {
  toggle?: () => void;
}

const NavigationList = ({ toggle }: NavigationListI) => {
  const links = [ROUTE_LINKS.searchPage, ROUTE_LINKS.favoritePage];

  const { classes, cx } = useStyles();

  const navigateToLink = useNavigate();
  //нужно для отображения навигации
  // если на определенном url чтобы верно отрисовка была
  const { pathname } = useLocation();
  const pathnameTrim = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  return (
    <>
      <List className={classes.rootList}>
        {links.map((link) => (
          <List.Item
            key={link.label}
            className={cx(classes.link, {
              [classes.linkActive]: pathnameTrim === link.url,
            })}
            onClick={() => {
              if (toggle) {
                toggle();
              }
              navigateToLink(link.url);
            }}
          >
            {link.label}
          </List.Item>
        ))}
      </List>
    </>
  );
};
export default NavigationList;
