import { ClockTime } from './time';

export class Alarm {
    time: ClockTime;
    label: string;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    repeat: boolean;
    enabled: boolean;

    constructor() {
        this.time = new ClockTime();
    }
}
