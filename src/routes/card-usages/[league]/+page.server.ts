export async function load({ fetch, params })
{
    const result = await fetch("/api/card-usage", {
        method: "POST",
        body: params.league
    }).then(response => response.json());

    return {
        usage: result["usage"] as JSON,
        change: result["change"] as JSON,
        updatedAt: result["updatedAt"] as number
    };
}