var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35609",
        "ok": "27935",
        "ko": "7674"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "18",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "60010",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2228",
        "ok": "2841",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "9133",
        "ok": "10226",
        "ko": "0"
    },
    "percentiles1": {
        "total": "23",
        "ok": "24",
        "ko": "0"
    },
    "percentiles2": {
        "total": "30",
        "ok": "40",
        "ko": "0"
    },
    "percentiles3": {
        "total": "18489",
        "ok": "28112",
        "ko": "0"
    },
    "percentiles4": {
        "total": "52116",
        "ok": "54077",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24232,
        "percentage": 68
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 183,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3520,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 7674,
        "percentage": 22
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "27.266",
        "ok": "21.39",
        "ko": "5.876"
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
        "total": "35609",
        "ok": "27935",
        "ko": "7674"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "18",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "60010",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2228",
        "ok": "2841",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "9133",
        "ok": "10226",
        "ko": "0"
    },
    "percentiles1": {
        "total": "23",
        "ok": "24",
        "ko": "0"
    },
    "percentiles2": {
        "total": "30",
        "ok": "40",
        "ko": "0"
    },
    "percentiles3": {
        "total": "18493",
        "ok": "28135",
        "ko": "0"
    },
    "percentiles4": {
        "total": "52108",
        "ok": "54074",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24232,
        "percentage": 68
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 183,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3520,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 7674,
        "percentage": 22
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "27.266",
        "ok": "21.39",
        "ko": "5.876"
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
