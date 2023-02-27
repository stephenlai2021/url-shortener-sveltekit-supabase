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
  login: async ({ request }) => {    
    const body = Object.fromEntries(await request.formData());
    console.log('form data: ', { type: 'login', ...body })    

    return {
      type: 'login',
      email: body.email,
      password: body.password
    }
  },
}