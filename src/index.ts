import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Next Iteration test #38';
  greetUser(name);
});
