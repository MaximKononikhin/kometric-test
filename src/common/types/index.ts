import { Method } from "axios";

export type IMakeRequest = {
    url: string,
    method?:  Method,
    headers?: any;
    params?: any;
    data?: any;
};

export type IStarship = {
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: number;
    passengers: number;
    cargo_capacity: number;
    starship_class: string;
}
