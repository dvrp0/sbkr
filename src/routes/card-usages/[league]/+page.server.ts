export async function load({ fetch, params })
{
    const usage = await fetch(`https://sbkr-1-x0172776.deta.app/usages?league=${params.league}`)
        .then(response => response.json())
        .then(result => result["result"] as JSON);

    const change = await fetch(`https://sbkr-1-x0172776.deta.app/usage-changes?league=${params.league}`)
        .then(response => response.json())
        .then(result => result["result"] as JSON);

    return {
        usage,
        change
    };
}