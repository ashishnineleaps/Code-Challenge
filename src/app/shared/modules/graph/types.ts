export interface AllUsers {
    id: string;
    email: string;
    name: string;
}

export interface Query {
    allUsers: AllUsers[];
}