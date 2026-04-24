var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(247,251,255)",
      "background-opacity" : 1.0,
      "border-width" : 0.5,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "font-size" : 12,
      "shape" : "diamond",
      "width" : 75.0,
      "height" : 35.0,
      "border-color" : "rgb(204,204,204)",
      "background-color" : "rgb(33,113,181)",
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "width" : 2.0,
      "opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "line-color" : "rgb(37,37,37)",
      "source-arrow-shape" : "none",
      "target-arrow-color" : "rgb(0,0,0)",
      "target-arrow-shape" : "none",
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-color" : "rgb(0,0,0)",
      "content" : "",
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[countInScene > 2]",
    "css" : {
      "line-color" : "rgb(68,1,84)"
    }
  }, {
    "selector" : "edge[countInScene = 2]",
    "css" : {
      "line-color" : "rgb(68,2,86)"
    }
  }, {
    "selector" : "edge[countInScene > 1.31155014][countInScene < 2]",
    "css" : {
      "line-color" : "mapData(countInScene,1.31155014,2,rgb(255,255,255),rgb(68,2,86))"
    }
  }, {
    "selector" : "edge[countInScene > 1.15197569][countInScene < 1.31155014]",
    "css" : {
      "line-color" : "mapData(countInScene,1.15197569,1.31155014,rgb(251,231,35),rgb(255,255,255))"
    }
  }, {
    "selector" : "edge[countInScene > 1][countInScene < 1.15197569]",
    "css" : {
      "line-color" : "mapData(countInScene,1,1.15197569,rgb(33,145,140),rgb(251,231,35))"
    }
  }, {
    "selector" : "edge[countInScene = 1]",
    "css" : {
      "line-color" : "rgb(33,145,140)"
    }
  }, {
    "selector" : "edge[countInScene < 1]",
    "css" : {
      "line-color" : "rgb(253,231,37)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]