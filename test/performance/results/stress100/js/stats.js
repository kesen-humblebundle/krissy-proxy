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
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2817",
        "ok": "2817",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1088",
        "ok": "1088",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "955",
        "ok": "955",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1004",
        "ok": "1004",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1949",
        "ok": "1949",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2652",
        "ok": "2652",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2795",
        "ok": "2795",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 90,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 20,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 90,
        "percentage": 45
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
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2817",
        "ok": "2817",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1088",
        "ok": "1088",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "955",
        "ok": "955",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1004",
        "ok": "1004",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1949",
        "ok": "1949",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2652",
        "ok": "2652",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2795",
        "ok": "2795",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 90,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 20,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 90,
        "percentage": 45
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
