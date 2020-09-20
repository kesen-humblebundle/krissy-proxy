var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3402",
        "ok": "3402",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1462",
        "ok": "1462",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1119",
        "ok": "1119",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1473",
        "ok": "1473",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2393",
        "ok": "2393",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3223",
        "ok": "3223",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3361",
        "ok": "3361",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 69,
        "percentage": 35
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 17,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 114,
        "percentage": 57
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    }
},
contents: {
"req_get-c5558": {
        type: "REQUEST",
        name: "Get",
path: "Get",
pathFormatted: "req_get-c5558",
stats: {
    "name": "Get",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3402",
        "ok": "3402",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1462",
        "ok": "1462",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1119",
        "ok": "1119",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1473",
        "ok": "1473",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2393",
        "ok": "2393",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3223",
        "ok": "3223",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3361",
        "ok": "3361",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 69,
        "percentage": 35
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 17,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 114,
        "percentage": 57
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
