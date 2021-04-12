import moment from 'moment';
import { DialogOpen, DrawerClose, DrawerOpen, handleLoader, PageLoader, SnackbarSubject } from "./rxSubject"
import { setLocalStorage } from './session';

/**
* @description method to open drawer
* @param params ("drawer_name", {drawer_data}, "opening_position")
*/
export const open_drawer = (...params) => {
  return DrawerOpen.next([...params])
}

/**
* @description method to close drawer
* @param params:string - drawer name to close
*/
export const close_drawer = (...params) => {
  DrawerClose.next([...params]);
}

/**
* @description method to open dialog
* @param params ("dialog_name", {dialog_data}, "opening_position")
*/
export const open_dialog = (...params) => {
  return DialogOpen.next([...params])
}

/**
* @description method to close dialog
* @param params ("dialog_name")
*/
export const close_dialog = (...params) => {
  return DialogOpen.next([...params])
}

/**
* @description method to start full page loader
*/
export const start_page_loader = () => {
  PageLoader.next(true)
}

/**
* @description method to stop full page loader
*/
export const stop_page_loader = () => {
  PageLoader.next(false)
}


export const findDayAgo = (date) => {
  return moment(date).fromNow();
};

/**
* @description method to open drawer with custom data
* @param drawerData: Object{}
*/
export const drawerToast = (drawerData = {}) => {
  setTimeout(() => {
    open_drawer("drawerToaster", drawerData, "bottom")
  }, 30);
};


/**
* @description this method is used to detect device type
* @return true/false
*/
export const detectDevice = () => {
  let isMobileViewServer = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i);
  return Boolean(isMobileViewServer);
};

 /**
 * @description method to show toastr
 * @param message toastr message
 * @param variant: 'variantSuccess' | 'variantError' | 'variantInfo' | 'variantWarning';
 * @param duration?: toastr duration - default: 2000 ms
 * @param vertical?: 'top' | 'bottom';
 * @param horizontal?: 'left' | 'center' | 'right';
 */
export const showToast = (message, variant, duration, vertical, horizontal) => {
  return SnackbarSubject.next({message, variant, duration, vertical, horizontal})
}

 /**
 * @description method to add session after login
 * @param data: Object - login response
 */
export const setSessionData = (data) => {
  setLocalStorage('email', data?.email);
  setLocalStorage('userId', data?.userId);
  setLocalStorage('firstName', data?.firstName);
  setLocalStorage('role', data?.role);
  setLocalStorage('status', data?.status);
}

 /**
 * @description method to start full page loader
 */
export const startLoader = () => {
  return handleLoader.next(true);
};


 /**
 * @description method to start full page loader
 */
export const stopLoader = () => {
  return handleLoader.next(false);
};