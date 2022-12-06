function muchTimePassed() {
    var d = new Date, dt = d.getTime(); d.setMonth(8, 1);
    if (d.getTime() > dt) d.setFullYear(d.getFullYear() - 1);
    var n = Math.floor((dt - d.getTime()) / 8.64e7 / 7);
    console.log('С 1 сентября ' + d.getFullYear() + ' года прошло ' + n + ' недель.');
}

muchTimePassed();