import storiesJson from "@/data/stories.json";

export interface StoryData {
    id: string;
    name: string;
    quote: string;
    achievement?: string;
    achievement2?: string;
}

export const storiesData: StoryData[] = storiesJson.map((s) => ({
    id: s.id,
    name: s.name,
    quote: s.quote,
    achievement: s.achievement || undefined,
    achievement2: s.achievement2 || undefined,
}));
