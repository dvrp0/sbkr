export async function handle({ event, resolve })
{
    console.log(event.platform);
    const response = await resolve(event);

    return response;
};