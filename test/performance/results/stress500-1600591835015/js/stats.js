var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600",
        "ok": "599",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "513",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "13323",
        "ok": "13323",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "6705",
        "ok": "6716",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3264",
        "ok": "3255",
        "ko": "0"
    },
    "percentiles1": {
        "total": "6381",
        "ok": "6387",
        "ko": "0"
    },
    "percentiles2": {
        "total": "9082",
        "ok": "9085",
        "ko": "0"
    },
    "percentiles3": {
        "total": "12711",
        "ok": "12712",
        "ko": "0"
    },
    "percentiles4": {
        "total": "13205",
        "ok": "13205",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 588,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40",
        "ok": "39.933",
        "ko": "0.067"
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
        "total": "600",
        "ok": "599",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "513",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "13323",
        "ok": "13323",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "6705",
        "ok": "6716",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3264",
        "ok": "3255",
        "ko": "0"
    },
    "percentiles1": {
        "total": "6381",
        "ok": "6387",
        "ko": "0"
    },
    "percentiles2": {
        "total": "9082",
        "ok": "9085",
        "ko": "0"
    },
    "percentiles3": {
        "total": "12711",
        "ok": "12712",
        "ko": "0"
    },
    "percentiles4": {
        "total": "13205",
        "ok": "13205",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 588,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40",
        "ok": "39.933",
        "ko": "0.067"
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
