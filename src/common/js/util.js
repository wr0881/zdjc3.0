import moment from 'moment';

//处理post传参后台不能解析
export const Post = (obj) => {
    let param = new URLSearchParams();
    for (let item in obj) {
        param.append(item, obj[item]);
    }
    return param;
}

//得到时间段 天，周，月，年
export function getTime(time) {
    const YMD = 'YYYY-MM-DD';
    // const TMS = 'HH:mm:ss';
    const ZERO = '00:00:00';
    const FORMAT = 'YYYY-MM-DD HH:mm:ss';
    const TODAY = moment().format(FORMAT);
    //零点至现在的时间
    function get1Days() {
        let date = [];
        date.push(moment().format(YMD) + ' ' + ZERO);
        date.push(TODAY);
        return date;
    }
    //七天的时间段
    function get7Days() {
        let date = [];
        date.push(moment().subtract('days', 7).format(YMD) + ' ' + ZERO);
        date.push(TODAY);
        return date;
    }
    //一个月的时间段
    function get1Month() {
        let date = [];
        date.push(moment().format('YYYY-MM') + '-01 ' + ZERO);
        date.push(TODAY);
        return date;
    }
    //一年的时间段
    function get1Year() {
        let date = [];
        date.push(moment().format('YYYY') + '-01-01 ' + ZERO);
        date.push(TODAY);
        return date;
    }
    switch (time) {
        case 'day': return get1Days();
        case 'week': return get7Days();
        case 'month': return get1Month();
        case 'year': return get1Year();
        default: return null;
    }
}