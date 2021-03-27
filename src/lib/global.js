import moment from 'moment';
import { DrawerClose, DrawerOpen, PageLoader } from "./rxSubject"

export const open_drawer = (...params) => {
    return DrawerOpen.next([...params])
}
export const close_drawer = (...params) => {
    DrawerClose.next([...params]);
}

export const start_page_loader = () => {
  PageLoader.next(true)
}
export const stop_page_loader = () => {
  PageLoader.next(false)
}

export const findDayAgo = (date) => {
    // console.log("DATE", date);
    return moment(date).fromNow();
};

export const drawerToast = (drawerData = {}, mobileView=true) => {
  setTimeout(() => {
    open_drawer("drawerToaster", drawerData, "bottom")
  }, 30);
};

// returns true if mobile device, false otherwise
export const detectDevice = (ctx) => {
  let isMobileViewServer = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i);
  console.log('isMobileViewServer', isMobileViewServer)

  return Boolean(isMobileViewServer);
};