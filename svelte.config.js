import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adpater-netlify";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: "#svelte",
    adapter: adapter(),
  },
};

export default config;
