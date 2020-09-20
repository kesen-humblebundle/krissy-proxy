var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "800",
        "ok": "609",
        "ko": "191"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "465",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "13083",
        "ok": "13083",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4936",
        "ok": "6483",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4080",
        "ok": "3439",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4715",
        "ok": "5806",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8211",
        "ok": "9101",
        "ko": "0"
    },
    "percentiles3": {
        "total": "12452",
        "ok": "12590",
        "ko": "0"
    },
    "percentiles4": {
        "total": "12921",
        "ok": "12956",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 587,
        "percentage": 73
    },
    "group4": {
        "name": "failed",
        "count": 191,
        "percentage": 24
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "57.143",
        "ok": "43.5",
        "ko": "13.643"
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
        "ok": "609",
        "ko": "191"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "465",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "13083",
        "ok": "13083",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4936",
        "ok": "6483",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4080",
        "ok": "3439",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4715",
        "ok": "5806",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8211",
        "ok": "9101",
        "ko": "0"
    },
    "percentiles3": {
        "total": "12452",
        "ok": "12590",
        "ko": "0"
    },
    "percentiles4": {
        "total": "12921",
        "ok": "12956",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 587,
        "percentage": 73
    },
    "group4": {
        "name": "failed",
        "count": 191,
        "percentage": 24
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "57.143",
        "ok": "43.5",
        "ko": "13.643"
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
