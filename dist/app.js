angular.module('app', ['flowchart'])
  .factory('prompt', function () {
    return prompt;
  })
  .config(function (NodeTemplatePathProvider) {
    NodeTemplatePathProvider.setTemplatePath("flowchart/node.html");
  })

  .controller('AppCtrl', function AppCtrl($scope, prompt, Modelfactory, flowchartConstants) {

    var deleteKeyCode = 46;
    var ctrlKeyCode = 17;
    var aKeyCode = 65;
    var escKeyCode = 27;
    var nextNodeID = 10;
    var nextConnectorID = 20;
    var ctrlDown = false;

    var model = {
      nodes: [
        {
          name: "Intro to C++ (CISC 1110",
          id: 2,
          x: 400,
          y: 100,
          color: '#000',
          borderColor: '#000',
          connectors: [
            {
              type: flowchartConstants.bottomConnectorType,
              id: 9
            },
            {
              type: flowchartConstants.bottomConnectorType,
              id: 10
            }
          ]
        },
        {
          name: "Advanced C++ (CISC 3110)",
          id: 3,
          x: 400,
          y: 300,
          color: '#F15B26',
          connectors: [
            {
              type: flowchartConstants.topConnectorType,
              id: 1
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 2
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 3
            },
            {
              type: flowchartConstants.bottomConnectorType,
              id: 4
            },
            {
              type: flowchartConstants.bottomConnectorType,
              id: 5
            },
            {
              type: flowchartConstants.bottomConnectorType,
              id: 12
            }
          ]
        },
        {
          name: "Software Design I (CISC 3120)",
          id: 4,
          x: 200,
          y: 500,
          color: '#000',
          borderColor: '#000',
          connectors: [
            {
              type: flowchartConstants.topConnectorType,
              id: 13
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 14
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 15
            }
          ]
        },
        {
          name: "Software Design II (CISC 3140",
          id: 5,
          x: 200,
          y: 700,
          color: '#000',
          borderColor: '#000',
          connectors: [
            {
              type: flowchartConstants.topConnectorType,
              id: 16
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 17
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 18
            }
          ]
        },
        {
          name: "Data Structures (CISC #)",
          id: 6,
          x: 575,
          y: 500,
          color: '#000',
          borderColor: '#000',
          connectors: [
            {
              type: flowchartConstants.topConnectorType,
              id: 19
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 20
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 21
            }
          ]
        },
        {
          name: "Project (CISC 4900 OR 5001)",
          id: 7,
          x: 900,
          y: 500,
          color: '#000',
          borderColor: '#000',
          connectors: [
            {
              type: flowchartConstants.topConnectorType,
              id: 22
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 23
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 24
            }
          ]
        },
        
        {
          name: "Discrete Structures (CISC 2210)",
          id: 8,
          x: 800,
          y: 100,
          color: '#000',
          borderColor: '#000',
          connectors: [
            {
              type: flowchartConstants.topConnectorType,
              id: 25
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 26
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 27
            }
          ]
        },
        
        {
          name: "Architecture (CISC 3110)",
          id: 9,
          x: 800,
          y: 250,
          color: '#000',
          borderColor: '#000',
          connectors: [
            {
              type: flowchartConstants.topConnectorType,
              id: 28
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 29
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 30
            }
          ]
        },
        
        {
          name: "Algorithms (3220) OR Theory (3230)",
          id: 10,
          x: 1100,
          y: 250,
          color: '#000',
          borderColor: '#000',
          connectors: [
            {
              type: flowchartConstants.topConnectorType,
              id: 31
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 32
            },
            {
              type: flowchartConstants.topConnectorType,
              id: 33
            }
          ]
        },
        
        {
          name: "OS (CISC 3320)",
          id: 11,
          x: 1500,
          y: 250,
          color: '#000',
          borderColor: '#000',
          connectors: [
            {
              type: flowchartConstants.topConnectorType,
              id: 34
            }
          ]
        },
  
{
  name: "Pre-Calc (MATH1011) OR placement in 1201",
  id: 12,
  x: 800,
  y: 0,
  color: '#000',
  borderColor: '#000',
  connectors: [
    {
      type: flowchartConstants.topConnectorType,
      id: 35
    }
  ]
},
{
  name: "Calc I",
  id: 13,
  x: 1500,
  y: 500,
  color: '#000',
  borderColor: '#000',
  connectors: [
    {
      type: flowchartConstants.topConnectorType,
      id: 36
    }
  ]
},
   
{
  name: "Calc II",
  id: 14,
  x: 1500,
  y: 600,
  color: '#000',
  borderColor: '#000',
  connectors: [
    {
      type: flowchartConstants.topConnectorType,
      id: 37
    }
  ]
},

{
  name: "Statistics (MATH2501) OR (MATH3501)",
  id: 15,
  x: 1500,
  y: 700,
  color: '#000',
  borderColor: '#000',
  connectors: [
    {
      type: flowchartConstants.topConnectorType,
      id: 38
    }
  ]
},
   
      ],
//Edges is where you connect the nodes.
    edges: [
      {
        source: 10,
        destination: 1
      },
      {
        source: 5,
        destination: 14
      },
      {
        source: 14,
        destination: 17
      },
      {
      	source: 5,
      	destination: 20
      },
      {
      	source: 5,
      	destination: 23
      },
      {
		source: 9,
		destination: 25
	  },
    ]
  };

$scope.flowchartselected = [];
var modelservice = Modelfactory(model, $scope.flowchartselected);

$scope.model = model;
$scope.modelservice = modelservice;

$scope.keyDown = function (evt) {
  if (evt.keyCode === ctrlKeyCode) {
    ctrlDown = true;
    evt.stopPropagation();
    evt.preventDefault();
  }
};

$scope.keyUp = function (evt) {

  if (evt.keyCode === deleteKeyCode) {
    modelservice.deleteSelected();
  }

  if (evt.keyCode == aKeyCode && ctrlDown) {
    modelservice.selectAll();
  }

  if (evt.keyCode == escKeyCode) {
    modelservice.deselectAll();
  }

  if (evt.keyCode === ctrlKeyCode) {
    ctrlDown = false;
    evt.stopPropagation();
    evt.preventDefault();
  }
};

$scope.addNewNode = function () {
  var nodeName = prompt("Enter a node name:", "New node");
  if (!nodeName) {
    return;
  }

  var newNode = {
    name: nodeName,
    id: nextNodeID++,
    x: 200,
    y: 100,
    color: '#F15B26',
    connectors: [
      {
        id: nextConnectorID++,
        type: flowchartConstants.topConnectorType
      },
      {
        id: nextConnectorID++,
        type: flowchartConstants.topConnectorType
      },
      {
        id: nextConnectorID++,
        type: flowchartConstants.bottomConnectorType
      },
      {
        id: nextConnectorID++,
        type: flowchartConstants.bottomConnectorType
      }
    ]
  };

  model.nodes.push(newNode);
};

$scope.activateWorkflow = function() {
  angular.forEach($scope.model.edges, function(edge) {
    edge.active = !edge.active;
  });
};

$scope.addNewInputConnector = function () {
  var connectorName = prompt("Enter a connector name:", "New connector");
  if (!connectorName) {
    return;
  }

  var selectedNodes = modelservice.nodes.getSelectedNodes($scope.model);
  for (var i = 0; i < selectedNodes.length; ++i) {
    var node = selectedNodes[i];
    node.connectors.push({id: nextConnectorID++, type: flowchartConstants.topConnectorType});
  }
};

$scope.addNewOutputConnector = function () {
  var connectorName = prompt("Enter a connector name:", "New connector");
  if (!connectorName) {
    return;
  }

  var selectedNodes = modelservice.nodes.getSelectedNodes($scope.model);
  for (var i = 0; i < selectedNodes.length; ++i) {
    var node = selectedNodes[i];
    node.connectors.push({id: nextConnectorID++, type: flowchartConstants.bottomConnectorType});
  }
};

$scope.deleteSelected = function () {
  modelservice.deleteSelected();
};

$scope.callbacks = {
  edgeDoubleClick: function () {
    console.log('Edge double clicked.');
  },
  edgeMouseOver: function () {
    console.log('mouserover')
  },
  isValidEdge: function (source, destination) {
    return source.type === flowchartConstants.bottomConnectorType && destination.type === flowchartConstants.topConnectorType;
  },
  edgeAdded: function (edge) {
    console.log("edge added");
    console.log(edge);
  },
  nodeRemoved: function (node) {
    console.log("node removed");
    console.log(node);
  },
  edgeRemoved: function (edge) {
    console.log("edge removed");
    console.log(edge);
  },
  nodeCallbacks: {
    'doubleClick': function (event) {
      console.log('Node was doubleclicked.')
    }
  }
};
modelservice.registerCallbacks($scope.callbacks.edgeAdded, $scope.callbacks.nodeRemoved, $scope.callbacks.edgeRemoved);

})
;
