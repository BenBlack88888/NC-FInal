import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = AOS.init({
    startEvent: 'load'
  }); // eslint-disable-line new-cap
};