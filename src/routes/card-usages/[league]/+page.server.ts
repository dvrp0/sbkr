export async function load({ fetch, params })
{
    const result = await fetch("/api/card-usage", {
        method: "POST",
        body: params.league
    }).then(response => response.json());

    return result as {
        usage: JSON;
        change: JSON;
        updatedAt: number;
    };
}