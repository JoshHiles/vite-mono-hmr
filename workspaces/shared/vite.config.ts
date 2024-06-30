import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts({ include: ["lib"] })],
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, "lib/main.ts"),
			formats: ["es"],
		},
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
			output: {
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
			},
		},
	},
});
