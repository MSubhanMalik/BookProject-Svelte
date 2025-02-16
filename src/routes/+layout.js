import { goto } from '$app/navigation';
import { getUser, user } from '../States/app.js';

export async function load({ url }) {
    const getUserHandler = async () => {
      const res = await getUser();
      console.log(res)
      if(res == null) goto('/login')
    };
    let value;
    user.subscribe(v => value = v);
    if (value == null && url.pathname != "/login") {
      await getUser();
    }
  }