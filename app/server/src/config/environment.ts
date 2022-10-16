type EnvironmentType = {
    [key: string]: any;
}

const environment: EnvironmentType = {
    BFF_LISTENER_PORT: Number(process.env.BFF_LISTENER_PORT)
};

export { environment };