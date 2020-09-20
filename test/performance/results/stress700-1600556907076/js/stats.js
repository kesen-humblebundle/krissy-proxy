var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "800",
        "ok": "607",
        "ko": "193"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "223",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "13635",
        "ok": "13635",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5122",
        "ok": "6751",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4270",
        "ok": "3611",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4936",
        "ok": "6183",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8594",
        "ok": "9584",
        "ko": "0"
    },
    "percentiles3": {
        "total": "12926",
        "ok": "13078",
        "ko": "0"
    },
    "percentiles4": {
        "total": "13465",
        "ok": "13504",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 579,
        "percentage": 72
    },
    "group4": {
        "name": "failed",
        "count": 193,
        "percentage": 24
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "53.333",
        "ok": "40.467",
        "ko": "12.867"
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
        "total": "800",
        "ok": "607",
        "ko": "193"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "223",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "13635",
        "ok": "13635",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5122",
        "ok": "6751",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4270",
        "ok": "3611",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4936",
        "ok": "6183",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8594",
        "ok": "9584",
        "ko": "0"
    },
    "percentiles3": {
        "total": "12926",
        "ok": "13078",
        "ko": "0"
    },
    "percentiles4": {
        "total": "13465",
        "ok": "13504",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 579,
        "percentage": 72
    },
    "group4": {
        "name": "failed",
        "count": 193,
        "percentage": 24
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "53.333",
        "ok": "40.467",
        "ko": "12.867"
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
