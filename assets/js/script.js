
var grafics = {};
var appData = {}

// metodo para criar graficos no formato pizza
grafics.criar = function (placeholder,dataSource, config){
    $.plot(placeholder, dataSource,config);
};

//metodo para usar o "GET" do ajax
appData.ajaxGet = function (url, sucesso, erro){
    $.ajax({
        type:"GET",
        url:url,
        dataTYpe: "json",
        success: sucesso,
        error: erro
    })
}

//metodo para usar o metodo "POST" do ajax
appData.ajaxSend = function (url, data, sucesso, erro){
    $.ajax({
        type:"POST",
        url:url,
        data: JSON.stringify(data),
        dataTYpe: "json",
        success: sucesso,
        error: erro
    });
}

//metodo para inicilizar app
appData.start = function(){

    //metodo para retornar source de linhas
    appData.ajaxGet("http://localhost:63342/testeGrafico/linhas.json", function(data){

        grafics.criar($("#chart"), [ {
            data: data.total,
            label: "Total"
        }, {
            data: data.Autorizados,
            label: "Com Autorização"
        }, {
            data: data.NaoAutorizados,
            label: "Sem Autorização"
        }], {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 0.05
                        }, {
                            opacity: 0.09
                        }]
                    }
                },
                points: {
                    show: true,
                    lineWidth: 2,
                    radius: 3
                },
                shadowSize: 0,
                stack: true
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 0
            },
            legend: {
                // show: false
                labelBoxBorderColor: "#fff"
            },
            colors: ["#94aec4", "#3473A9"],
            xaxis: {
                ticks: [
                    [1, "JAN"],
                    [2, "FEV"],
                    [3, "MAR"],
                    [4, "ABR"],
                    [5, "MAI"],
                    [6, "JUN"],
                    [7, "JUL"],
                    [8, "AGO"],
                    [9, "SET"],
                    [10, "OUT"],
                    [11, "NOV"],
                    [12, "DEZ"]
                ],
                font: {
                    size: 12,
                    family: "Open Sans, Arial",
                    variant: "small-caps",
                    color: "#9da3a9"
                }
            },
            yaxis: {
                ticks: 3,
                tickDecimals: 0,
                font: {
                    size: 12,
                    color: "#9da3a9"
                }
            }
        })


    }, function(error){
        alert("Erro: " + JSON.stringify(error))
    });

    //metodo para retornar source do grafico pizza esquerdo
    appData.ajaxGet("http://localhost:63342/testeGrafico/pizzaesquerda.json", function(data){
        grafics.criar($("#pie"), [{
            label: "",
            data: data.Noite,
            color: "#021e4d"
        }, {
            label: "",
            data: data.Dia,
            color: "#c87101"
        }],  {
            series: {
                pie: {
                    show: true,
                    combine: {
                        color: '#999',
                        threshold: 0.1
                    }
                }
            },
            legend: {
                show: false
            }
        });

    }, function(error){
        alert("Erro: " + JSON.stringify(error))
    });

    //metodo para retornar source de grafico pizza direito
    appData.ajaxGet("http://localhost:63342/testeGrafico/pizzadireita.json", function(data){
        grafics.criar($("#pie2"), [{
            label: "",
            data: data.Noite,
            color: "#021e4d"
        }, {
            label: "",
            data: data.Dia,
            color: "#c87101"
        }], {
            series: {
                pie: {
                    show: true,
                    combine: {
                        color: '#999',
                        threshold: 0.1
                    }
                }
            },
            legend: {
                show: false
            }
        })

    }, function(error){
        alert("Erro: " + JSON.stringify(error))
    });

    //metodo para retornar source do primeiro grafico de barrass
    appData.ajaxGet("http://localhost:63342/testeGrafico/barraum.json", function(data){
        grafics.criar($("#bar"), [data], {
            series: {
                bars: {
                    show: true,
                    barWidth: 0.6,
                    align: "center"
                }

            },
            colors: ["#94aec4", "#3473A9"],
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#fff",
                borderWidth: 0
            },
            xaxis: {
                mode: "categories",
                tickLength: 0
            }
        })

    }, function(error){
        alert("Erro: " + JSON.stringify(error))
    });

    //metodo para retornar source do segundo grafico de barras
    appData.ajaxGet("http://localhost:63342/testeGrafico/barradois.json", function(data){
        grafics.criar($("#bar2"), [data],{
            series: {
                bars: {
                    show: true,
                    barWidth: 0.6,
                    align: "center"
                }

            },
            colors: ["#94aec4", "#3473A9"],
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#fff",
                borderWidth: 0
            },
            xaxis: {
                mode: "categories",
                tickLength: 0
            }
        })

    }, function(error){
        alert("Erro: " + JSON.stringify(error))
    });

    //metodo para retornar source do terceiro grafico de barras
    appData.ajaxGet("http://localhost:63342/testeGrafico/barratres.json", function(data){
        grafics.criar($("#bar3"), [data], {
            series: {
                bars: {
                    show: true,
                    barWidth: 0.7,
                    align: "center"
                }

            },
            colors: ["#94aec4", "#3473A9"],
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#fff",
                borderWidth: 0
            },
            xaxis: {
                mode: "categories",
                tickLength: 0
            }
        })

    }, function(error){
        alert("Erro: " + JSON.stringify(error))
    });

}

