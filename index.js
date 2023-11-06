import { server } from "./src/app/app.js";
import { startConnection } from "./src/settings/database.js";

async function main() {
  await startConnection();

  server.listen(3000, () => {
    console.log("Server on port 3000");
  });
}

main();
