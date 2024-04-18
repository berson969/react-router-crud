import {DateTime, Interval} from "luxon";

const calculateTimeInterval = (created: number): string => {
    const createdDateTime = DateTime.fromMillis(created);
    const currentDateTime = DateTime.now();
    const interval = Interval.fromDateTimes(createdDateTime, currentDateTime);

    if (interval.length("years") > 5) {
        return `${Math.floor(interval.length("years"))} лет назад`;
    } else if (interval.length("years") > 2) {
        return `${Math.floor(interval.length("years"))} года назад`;
    } else if (interval.length("years") > 1) {
        return `${Math.floor(interval.length("years"))} год назад`;
    } else if (interval.length("months") > 5) {
        return `${Math.floor(interval.length("months"))} месяцев назад`;
    } else if (interval.length("months") > 2) {
        return `${Math.floor(interval.length("months"))} месяца назад`;
    } else if (interval.length("months") > 1) {
        return `${Math.floor(interval.length("months"))} месяц назад`;
    } else if (interval.length("days") > 5) {
        return `${Math.floor(interval.length("days"))} дней назад`;
    } else if (interval.length("days") > 2) {
        return `${Math.floor(interval.length("days"))} дня назад`;
    } else if (interval.length("days") > 1) {
        return `${Math.floor(interval.length("days"))} день назад`;
    } else if (interval.length("hours") > 5) {
        return `${Math.floor(interval.length("hours"))} часов назад`;
    } else if (interval.length("hours") > 2) {
        return `${Math.floor(interval.length("hours"))} часа назад`;
    } else if (interval.length("hours") > 1) {
        return `${Math.floor(interval.length("hours"))} час назад`;
    } else if (interval.length("minutes") > 5) {
        return `${Math.floor(interval.length("minutes"))} минут назад`;
    } else if (interval.length("minutes") > 2) {
        return `${Math.floor(interval.length("minutes"))} минуты назад`;
    } else if (interval.length("minutes") > 1) {
        return `${Math.floor(interval.length("minutes"))} минуту назад`;
    } else {
        return "сейчас";
    }
}

export default calculateTimeInterval;
