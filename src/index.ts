import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Developing in webflow is soo good';
  greetUser(name);
});
