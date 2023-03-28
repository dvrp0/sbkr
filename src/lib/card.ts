export interface CardData
{
    id: string;
    name: string;
    cost: number;
    kingdom: string;
    rarity: string;
    unitTypes: string;
    strengths: number[];
    movement: number;
    type: string;
    descriptions: string[];
}

export function convertType(type: string): string
{
    if (type == "유닛")
        return "unit";
    else if (type == "건물")
        return "building";
    else
        return "spell";
}

export function convertRarity(rarity: string): string
{
    if (rarity == "일반")
        return "common";
    else if (rarity == "레어")
        return "rare";
    else if (rarity == "에픽")
        return "epic";
    else
        return "legendary";
}

export function convertFaction(faction: string): string
{
    if (faction == "동방의 무리")
        return "swarm";
    else if (faction == "철갑 연합")
        return "ironclad";
    else if (faction == "겨울 협정")
        return "winter";
    else if (faction == "그림자 부족")
        return "shadowfen"
    else
        return "neutral";
}