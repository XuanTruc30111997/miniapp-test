import { environment } from "./config/environment";
import { startServer } from "./server";

// TODO: using environemt
const BFF_LISTENER_PORT = 5001;

export async function startApp(): Promise<void> {
    const { app, server } = await startServer();
    // TODO: using in environemt
    // app.listen(environment.BFF_LISTENER_PORT, () => {
    //     console.log(`Server is ready at http://localhost:${environment.BFF_LISTENER_PORT}${server.graphqlPath}`)
    // });

    app.listen(BFF_LISTENER_PORT, () => {
        console.log(`Server is ready at http://localhost:${BFF_LISTENER_PORT}${server.graphqlPath}`)
    });
}

startApp();