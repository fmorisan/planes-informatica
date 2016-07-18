/**
 * Created by matias on 7/18/16.
 */
class DiagramFactory{
    constructor(go){
        this.$ = go.GraphObject.make;
        this.go = go;
    }

    init(diagram){
        this.nodeTemplate(diagram);
        this.linkTemplate(diagram);
    }

    create(selector){
        return this.$(this.go.Diagram, selector,
            {
                // have mouse wheel events zoom in and out instead of scroll up and down
                "toolManager.mouseWheelBehavior": this.go.ToolManager.WheelZoom,
                initialAutoScale: this.go.Diagram.Uniform,
                "linkingTool.direction": this.go.LinkingTool.ForwardsOnly,
                initialContentAlignment: this.go.Spot.Center,
                layout: this.$(this.go.LayeredDigraphLayout, { isInitial: false, isOngoing: false, layerSpacing: 50 }),
                "undoManager.isEnabled": true
            });
    }

    defaultAdornment(){
        return this.$(this.go.Adornment, "Spot",
            this.$(this.go.Panel, "Auto",
                this.$(this.go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
                this.$(this.go.Placeholder))
        );

    }

    // define the Node template
    nodeTemplate(diagram){
        diagram.nodeTemplate =
            this.$(this.go.Node, "Auto",
                { selectionAdornmentTemplate: this.defaultAdornment() },
                new this.go.Binding("location", "loc", this.go.Point.parse).makeTwoWay(this.go.Point.stringify),
                // define the node's outer shape, which will surround the TextBlock
                this.$(this.go.Shape, "Rectangle",
                    { fill: "white", stroke: "black", portId: "",
                        toLinkable: true, cursor: "pointer", fromLinkable: true,
                        toEndSegmentLength: 50, fromEndSegmentLength: 40 }),
                this.$(this.go.TextBlock, "Page",
                    { margin: 6,
                        editable: true },
                    new go.Binding("text", "text").makeTwoWay()));
    }

    linkTemplate(diagram){
        diagram.linkTemplate =
            this.$(this.go.Link,  // the whole link panel
                new this.go.Binding("points").makeTwoWay(),
                { curve: this.go.Link.Bezier, toShortLength: 15 },
                new this.go.Binding("curviness", "curviness"),
                this.$(this.go.Shape,  // the link shape
                    { stroke: "#2F4F4F", strokeWidth: 2.5 }),
                this.$(this.go.Shape,  // the arrowhead
                    { toArrow: "kite", fill: "#2F4F4F", stroke: null, scale: 2 })
            );
    }

    layout(diagram){
        diagram.layoutDiagram(true);
    }

    load(diagram, json){
        diagram.model = this.go.Model.fromJson(json);
    }

}