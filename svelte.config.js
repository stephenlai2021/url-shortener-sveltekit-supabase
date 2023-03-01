// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-vercel";
// import adapterNode from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // adapter: adapterNode({
    //   out: "build",
    // }),
  },
  preprocess: vitePreprocess(),
};

export default config;
