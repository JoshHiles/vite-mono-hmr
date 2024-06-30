1. Install packages `pnpm install`
2. Build shared workspace `pnpm run shared build`
3. Run the UI workspace `pnpm run dev`
4. You should see `AComponent` on the page
5. Change [AComponent](workspaces/shared/lib/AComponent.tsx) to say something new
6. in a seperate terminal without closing down the `pnpm run dev` terminal, run `pnpm run shared build`