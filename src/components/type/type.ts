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