import "$lib/supabase/config";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";

export const handle = async ({ event, resolve }) => {
  let theme = null;

  const newTheme = event.url.searchParams.get("theme");
  const cookieTheme = event.cookies.get("colortheme");

  if (newTheme) {
    theme = newTheme;
  } else if (cookieTheme) {
    theme = cookieTheme;
  }

  if (theme) {
    return await resolve(event, {
      transformPageChunk: ({ html }) =>
        html.replace('data-theme=""', `data-theme="${theme}"`),
    });
	}
	
	const { session, supabaseClient } = await getSupabase(event);
  
	event.locals.sb = supabaseClient;
	event.locals.session = session;
	
	return await resolve(event);
};
