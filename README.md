# URL Shortener App

This url shortener application is a production ready app, it is a fullstack app powered by Sveltekit and Supabase. It has a robust authentication system, each page / api route is fully protected. It has a good-looking user interface and fully functional CRUD backend operations. Once user sign in the page redirects to dashboard where we can enter original url in the input box to get the shortened url, it is customized to the authenticated user so we won't be able to see the data that does not belong to us.

## Stack

<!-- Sveltekit - No.1 meta-framework and also the most advanced, smarties  -->
Sveltekit - An advanced, smart meta-framework combining frontend and backend tech allowing user building a powerful fullstack web app in one single project rapidly and easily, it takes care of all the heavy-lifting job for us so we can only focus on the reactive parts 🥰

<!-- Supabase - No.1 backend as service, it simplifies backend development  -->
Supabase - A popular backend as a service, it simplifies backend development for us so that we can communicate with Supabase with easy to read and understand Javasccript APK pretty quick and easy. The CMS is very developer friendly 🥰

<!-- TailwindCSS - No.1 CSS library, it makes styling so much easy and we  -->
TailwindCSS - A cool and advanced css library makes styling so much easy and we never leave our html which is amazing 😘

<!-- Vercel - No.1 hosting platform, it is well maintained and has the  -->
Vercel - it is well maintained hosting platform and has the quickiest response time meaning when we hit the url the page is rendered in the browser almost in no time, this gives the best user experiences, pretty awesome 🥰

## Topics

- Folder Structure

- Page Route

- Server Route (API Route)

- Authentification

 
## Usage

Fist download this repo and open it with VSCode

Open terminal and install all the dependencies with the command
```
npm i
```

Create an `.env` file in root directory and add the following codes
```
PUBLIC_SUPABASE_ANON_KEY = Your supabaseKey
PUBLIC_SUPABASE_URL = Your supabaseUrl
```

Create a Supabase account


Run development server
```
npm run dev
```

## Deployment


