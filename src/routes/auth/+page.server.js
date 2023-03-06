export const load = async ({}) => {}

export const actions = {
  register: async ({ request }) => {
    const formData = await request.formData()
    console.log('form data: ', { type: 'register', ...formData })

    return {
      type: "register",
      email: formData.get("email"),
      password: formData.get("password")
    };
  },
  login: async ({ request, locals, url }) => {    
    // const body = Object.fromEntries(await request.formData());
    // console.log('form data: ', { type: 'login', ...body })    

    // return {
    //   type: 'login',
    //   email: body.email,
    //   password: body.password
    // }
    
    const provider = url.searchParams.get('provider')

    if (provider) {
      const { data, error } = await locals.supabase.auth.signInWithOAuth({
        provider
      })
    }

    if (error) {
      console.log(error)
      return fail(400, {
        message: 'Something  went wrong'
      })
    }

    console.log('data: ', data)
  },
}