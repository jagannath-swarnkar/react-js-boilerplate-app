import { useSelector } from "react-redux";

const isMobile = () => {
  const mobileView = useSelector((state) => state.store?.isMobile) || false;
  return [mobileView];
};

export default isMobile;
