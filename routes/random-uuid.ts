import { Handlers } from "https://deno.land/x/fresh@1.5.4/server.ts";

export const handler: Handlers = {
  GET(_req) {
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {
      headers: { "Content-Type": "application/json" }
    })
  }
}