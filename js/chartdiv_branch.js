

am5.ready(function() {
    
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv_branch");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      paddingLeft: 0,
      layout: root.verticalLayout
    }));
    
    
    // Data
    var colors = chart.get("colors");
    
    var data = [{
      country: "US",
      visits: 725,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/united-states.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "UK",
      visits: 625,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/united-kingdom.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "China",
      visits: 602,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/china.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "Japan",
      visits: 509,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/japan.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "Germany",
      visits: 322,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/germany.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "France",
      visits: 214,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/france.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "India",
      visits: 204,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/india.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "Spain",
      visits: 198,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/spain.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "Netherlands",
      visits: 165,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/netherlands.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "South Korea",
      visits: 93,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/south-korea.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "Canada",
      visits: 41,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/canada.svg",
      columnSettings: { fill: colors.next() }
    }];
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true
    })
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "country",
      renderer: xRenderer,
      bullet: function (root, axis, dataItem) {
        return am5xy.AxisBullet.new(root, {
          location: 0.5,
          sprite: am5.Picture.new(root, {
            width: 24,
            height: 24,
            centerY: am5.p50,
            centerX: am5.p50,
            src: dataItem.dataContext.icon
          })
        });
      }
    }));
    
    xRenderer.grid.template.setAll({
      location: 1
    })
    
    xRenderer.labels.template.setAll({
      paddingTop: 20
    });
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "visits",
      categoryXField: "country"
    }));
    
    series.columns.template.setAll({
      tooltipText: "{categoryX}: {valueY}",
      tooltipY: 0,
      strokeOpacity: 0,
      templateField: "columnSettings"
    });
    
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
    chart.appear(1000, 100);
    
    }); // end am5.ready()

