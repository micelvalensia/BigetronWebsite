export type result = {
    enemy: string;
    teamScore: number;
    enemyScore: number;
    win: boolean;
    date: string;
    time: string;
}

export type DataResult = {
    data: result
}

export type upcoming = {
    enemy: string;
    date: string;
    time: string;
}

export type DataUpcoming = {
    data: upcoming;
}

export type news = {
    date: string;
    description: string;
    src: string;
}

export type DataNews = {
    data: news;
}

export type card = {
    id: number;
    title: string;
    image: string
}

export type DataCard = {
    data: card;
}

export type sponsor = {
    id: number;
    name: string;
    logo: string;
}

export type member = {
    id: number;
    title: string;
    image: string;
    hoverImage: string;
}

export type DataMember = {
    data: member;
}
