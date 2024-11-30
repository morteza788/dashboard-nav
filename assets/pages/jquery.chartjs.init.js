/**
 * Theme: Dastyle - Responsive Bootstrap 4 Admin Dashboard
 * Author: themes
 * Chart Js
 */


!function ($) {
    "use strict";

    var ChartJs = function () { };
    // ChartJs.defaults.font.family = "iransans"
    ChartJs.prototype.respChart = function (selector, type, data, options) {
        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // enable resizing matter
        $(window).resize(generateChart);

        // this function produce the responsive Chart JS
        function generateChart() {
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width());
            switch (type) {
                case 'Line':
                    new Chart(ctx, { type: 'line', data: data, options: options });
                    break;
                case 'Doughnut':
                    new Chart(ctx, { type: 'doughnut', data: data, options: options });
                    break;
                case 'Pie':
                    new Chart(ctx, { type: 'pie', data: data, options: options });
                    break;
                case 'Bar':
                    new Chart(ctx, { type: 'bar', data: data, options: options });
                    break;
                case 'Radar':
                    new Chart(ctx, { type: 'radar', data: data, options: options });
                    break;
                case 'PolarArea':
                    new Chart(ctx, { data: data, type: 'polarArea', options: options });
                    break;
            }
            // Initiate new chart or Redraw

        };
        // run function - render chart at first load
        generateChart();
    },

        //init
        ChartJs.prototype.init = function () {
            //creating lineChart
            var lineChart = {

                labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
                datasets: [{
                    label: "نرخ تبدیل",
                    fill: false,
                    backgroundColor: '#d9e6fd',
                    borderColor: '#d9e6fd',
                    data: [-90, -50, -70, 20, -35, 20, 10, 50, 30, 80]
                }, {
                    label: "ارزش فروش متوسط",
                    fill: false,
                    backgroundColor: '#4a8af6',
                    borderColor: "#4a8af6",
                    borderDash: [5, 5],
                    data: [10, -50, 30, -80, 50, -30, 30, -80, 10, -10]
                }]
            };

            var lineOpts = {
                responsive: true,
                // title:{
                //     display:true,
                //     text:'Chart.js Line Chart'
                // },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                legend: {
                    labels: {
                        fontColor: '#8997bd',
                        fontFamily: "iransans",
                    }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        // scaleLabel: {
                        //     display: true,
                        //     labelString: 'Month'
                        // },
                        gridLines: {
                            color: 'rgba(137, 151, 189, 0.15)',
                        },
                        ticks: {
                            fontFamily: "iransans",
                            fontColor: '#8997bd'
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(137, 151, 189, 0.15)',
                        },
                        ticks: {
                            fontFamily: "iransans",
                            max: 100,
                            min: -100,
                            stepSize: 20,
                            fontColor: '#8997bd'
                        }
                    }]
                }
            };

            this.respChart($("#lineChart"), 'Line', lineChart, lineOpts);

            //donut chart
            var donutChart = {
                labels: [
                    "بیت کوین",
                    "اتریوم",
                    "لیت کوین",
                ],

                datasets: [
                    {
                        data: [80, 80, 80],
                        backgroundColor: [
                            "#f7931a",
                            "#4d79f6",
                            "#e0e7fd",
                        ],
                        borderColor: "transparent",
                        innerRadius: "55%",
                        hoverBackgroundColor: [
                            "#f7931a",
                            "#4d79f6",
                            "#e0e7fd",
                        ],
                        hoverBorderColor: "transparent",

                    }],

            };

            var donutOpts = {
                responsive: true,
                cutoutPercentage: 80,
                legend: {
                    labels: {
                        fontColor: '#8997bd',
                        fontFamily: "iransans",
                    }
                }
            };



            this.respChart($("#doughnut"), 'Doughnut', donutChart, donutOpts);


            //Pie chart
            var pieChart = {
                labels: [
                    "دسک تاپ",
                    "تبلت",
                    "موبایل",
                ],
                datasets: [
                    {
                        data: [80, 80, 80],
                        backgroundColor: [
                            "#f7931a",
                            "#4d79f6",
                            "#e0e7fd",
                        ],
                        borderColor: "transparent",
                        hoverBackgroundColor: [
                            "#f7931a",
                            "#4d79f6",
                            "#e0e7fd",
                        ],
                        hoverBorderColor: "#ffffff"
                    }]
            };
            var pieChartOpts = {
                legend: {
                    labels: {
                        fontFamily: "iransans",
                        fontColor: '#8997bd'
                    }
                }
            };
            this.respChart($("#pie"), 'Pie', pieChart, pieChartOpts);


            //barchart
            var barChart = {
                labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر"],
                datasets: [
                    {
                        label: "تجزیه و تحلیل فروش",
                        backgroundColor: "rgba(23, 97, 253, 0.4)",
                        borderColor: "#4a8af6",
                        borderWidth: 2,
                        barPercentage: 0.3,
                        categoryPercentage: 0.5,
                        hoverBackgroundColor: "rgba(23, 97, 253, 0.7)",
                        hoverBorderColor: "#4a8af6",
                        data: [65, 59, 80, 81, 56, 55, 40, 20]
                    }
                ]
            };
            var barOpts = {
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "iransans",
                        fontColor: '#8997bd'
                    }
                },
                scales: {
                    xAxes: [
                        {
                            barPercentage: 0.8,
                            categoryPercentage: 0.4,
                            display: true,
                            gridLines: {
                                color: 'rgba(137, 151, 189, 0.15)',
                            },
                            ticks: {
                                fontFamily: "iransans",
                                fontColor: '#8997bd'
                            }
                        }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(137, 151, 189, 0.15)',
                        },
                        ticks: {
                            fontFamily: "iransans",
                            fontColor: '#8997bd'
                        }
                    }]
                }

            };
            this.respChart($("#bar"), 'Bar', barChart, barOpts);


            //radar chart
            var radarChart = {
                labels: ["غذا خوردن", "نوشیدن", "خوابیدن", "طراحی", "برنامه نویسی", "دوچرخه سواري", "دویدن"],
                datasets: [
                    {
                        label: "دسک تاپ",
                        backgroundColor: "rgba(77,121,246,0.3)",
                        borderColor: "#4d79f6",
                        pointBackgroundColor: "#4ac7ec",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(179,181,198,1)",
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: "تبلت",
                        backgroundColor: "rgba(74,199,236,0.2)",
                        borderColor: "#4ac7ec",
                        pointBackgroundColor: "#4d79f6",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(255,99,132,1)",
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            };
            var radarOpts = {
                legend: {
                    labels: {
                        fontFamily: "iransans",
                        fontColor: '#8997bd'
                    }
                },
                scale: {
                    gridLines: {
                        color: 'rgba(137, 151, 189, 0.15)',
                    },
                    angleLines: {
                        color: 'rgba(137, 151, 189, 0.15)', // lines radiating from the center
                    },
                    pointLabels: {
                        fontColor: "#8997bd",
                    },
                    ticks: {
                        fontFamily: "iransans",
                        backdropColor: '#e0e7fd',
                        fontColor: '#8997bd',
                        beginAtZero: true,
                        fontSize: 10,
                    }
                },
            };
            this.respChart($("#radar"), 'Radar', radarChart, radarOpts);

            //Polar area chart
            var polarChart = {
                datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        18
                    ],
                    backgroundColor: [
                        "#f7931a",
                        "#4d79f6",
                        "#1ac9ff",
                        "#e0e7fd",
                    ],
                    borderColor: "transparent",
                    label: 'دیتا من', // for legend
                    hoverBorderColor: "#ffffff"
                }],
                labels: [
                    "سری 1",
                    "سری 2",
                    "سری 3",
                    "سری 4"
                ]
            };
            var polarAreaOpts = {
                legend: {
                    labels: {
                        fontFamily: "iransans",
                        fontColor: '#8997bd'
                    }
                },
                scale: {
                    gridLines: {
                        color: 'rgba(137, 151, 189, 0.15)',
                    },
                    angleLines: {
                        color: 'rgba(137, 151, 189, 0.15)', // lines radiating from the center
                    }
                }
            };
            this.respChart($("#polarArea"), 'PolarArea', polarChart, polarAreaOpts);
        },
        $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs

}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.ChartJs.init()
    }(window.jQuery);


