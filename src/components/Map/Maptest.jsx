// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import * as topojson from 'topojson-client';
// import indiaJSON from './india.json';
// import ScheduleButtons from '../ScheduleButtons/ScheduleButtons';

// const LiabilitiesVisualization = () => {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
  
//   useEffect(() => {
//     const width = 500;
//     const height = 600;

//      const svg = d3.select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .style("position", "absolute")
//       .style("top", "50px")
//       .style("right", "10")
//       .style("z-index", "1")
//       .style("margin-left","20rem")
//     const projection = d3.geoMercator()
//       .center([100, 20])
//       .scale(700);

//     const path = d3.geoPath().projection(projection);

//     const g = svg.append("g")
//       .attr("class", "regions");

//     g.selectAll("path")
//       .data(topojson.feature(indiaJSON, indiaJSON.objects.india_pc_2014).features)
//       .enter().append("path")
//       .attr("d", path)
//       .style("stroke", "black")
//       .style("stroke-width", 0.7)
//       .style("opacity", 0.8)
//       .style("fill", "white")
//       .on("mouseover", function(event, d) {
//         const [x, y] = d3.pointer(event);
//         const name = d.properties.PC_NAME;
//         showTooltip(x, y, name);
//         d3.select(this).style("fill", "yellow");
//       })
//       .on("mouseout", function() {
//         hideTooltip();
//         d3.select(this).style("fill", "white");
//       });

//     return () => {
//       g.selectAll("path").remove();
//     };
//   }, []);

//   const showTooltip = (x, y, name) => {
//     d3.select(tooltipRef.current)
//       .style("display", "block")
//       .style("left", (x+300) + "px")
//       .style("top", (y) + "px")
//       .text(name);
//   };

//   const hideTooltip = () => {
//     d3.select(tooltipRef.current).style("display", "none");
//   };

//   const handleClick = (color, arr) => {
//     const svg = d3.select(svgRef.current);
//      console.log(svg)
//     svg.selectAll("path")
//       .style("fill", d => arr.includes(d.properties.PC_NAME) ? color : "white");
//   };
  

//   return (
//     <div style={{ position: 'relative' }}>
//       <svg ref={svgRef}></svg>
//       <div ref={tooltipRef} style={{ position: 'absolute', display: 'none', backgroundColor: 'white', padding: '5px', border: '1px solid black' }}></div>
//       <ScheduleButtons handleClick={handleClick}/>
//     </div>
//   );
// };

// export default LiabilitiesVisualization;

// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import * as topojson from 'topojson-client';
// import indiaJSON from './india.json';
// import ScheduleButtons from '../ScheduleButtons/ScheduleButtons';

// const LiabilitiesVisualization = () => {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
  
//   useEffect(() => {
//     const width = 500;
//     const height = 600;

//     const svg = d3.select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .style("position", "absolute")
//       .style("top", "50px")
//       .style("right", "10px")
//       .style("z-index", "1")
//       .style("margin-left", "20rem");

//     const projection = d3.geoMercator()
//       .center([100, 20])
//       .scale(700);

//     const path = d3.geoPath().projection(projection);

//     const g = svg.append("g")
//       .attr("class", "regions");

//     const mapData = topojson.feature(indiaJSON, indiaJSON.objects.india_pc_2014);

//     g.selectAll("path")
//       .data(mapData.features)
//       .enter().append("path")
//       .attr("d", path)
//       .style("stroke", "black")
//       .style("stroke-width", 0.7)
//       .style("opacity", 0.8)
//       .style("fill", "white")
//       .on("mouseover", handleMouseOver)
//       .on("mouseout", handleMouseOut);

//     return () => {
//       g.selectAll("path").remove();
//     };
//   }, []);

//   const handleMouseOver = (event, d) => {
//     const [x, y] = d3.pointer(event);
//     const name = d.properties.PC_NAME;
//     showTooltip(x + 300, y, name);
//     d3.select(event.target).style("fill", "yellow");
//   };

//   const handleMouseOut = (event) => {
//     hideTooltip();
//     d3.select(event.target).style("fill", "white");
//   };

//   const showTooltip = (x, y, name) => {
//     d3.select(tooltipRef.current)
//       .style("display", "block")
//       .style("left", x + "px")
//       .style("top", y + "px")
//       .text(name);
//   };

//   const hideTooltip = () => {
//     d3.select(tooltipRef.current).style("display", "none");
//   };

//   const handleClick = (color, arr) => {
//     const svg = d3.select(svgRef.current);
//     svg.selectAll("path")
//       .style("fill", d => arr.includes(d.properties.PC_NAME) ? color : "white");
//   };

//   return (
//     <div style={{ position: 'relative' }}>
//       <svg ref={svgRef}></svg>
//       <div ref={tooltipRef} style={{ position: 'absolute', display: 'none', backgroundColor: 'white', padding: '5px', border: '1px solid black' }}></div>
//       <ScheduleButtons handleClick={handleClick}/>
//     </div>
//   );
// };

// export default LiabilitiesVisualization;

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import indiaJSON from './india.json';
import ScheduleButtons from '../ScheduleButtons/ScheduleButtons';
import Dropdown from '../Dropdown/Dropdown';

const LiabilitiesVisualization = () => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  
  useEffect(() => {
    const width = 500;
    const height = 600;
    

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .classed("svg-container", true);
    
    

    const projection = d3.geoMercator()
      .center([100, 20])
      .scale(700);

    const path = d3.geoPath().projection(projection);

    const g = svg.append("g")
      .attr("class", "regions");

    const mapData = topojson.feature(indiaJSON, indiaJSON.objects.india_pc_2014);

    g.selectAll("path")
      .data(mapData.features)
      .enter().append("path")
      .attr("d", path)
      .style("stroke", "black")
      .style("stroke-width", 0.7)
      .style("opacity", 0.8)
      .style("fill", "white")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    return () => {
      g.selectAll("path").remove();
    };
  },[] );

  const handleMouseOver = (event, d) => {
    const [x, y] = d3.pointer(event);
    const name = d.properties.PC_NAME;
    showTooltip(x + 500, y, name);
    d3.select(event.target).style("fill", "yellow");
  };

  const handleMouseOut = (event) => {
    hideTooltip();
    d3.select(event.target).style("fill", "white");
  };

  const showTooltip = (x, y, name) => {
    d3.select(tooltipRef.current)
      .style("display", "block")
      .style("left", x + "px")
      .style("top", y + "px")
      .text(name);
  };

  const hideTooltip = () => {
    d3.select(tooltipRef.current).style("display", "none");
  };

  const handleClick = (color, arr) => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("path")
      .style("fill", d => arr.includes(d.properties.PC_NAME) ? color : "white");
    
    
  };
  const onClick=(color, arr)=>{
    const svg = d3.select(svgRef.current)
    svg.selectAll("path")
    .style("fill",d =>arr.includes(d.properties.PC_NAME)? color: "White");
  }

  return (
    <div style={{ position: 'relative' }}>
      <svg ref={svgRef}></svg>
      <div ref={tooltipRef} style={{ position: 'absolute', display: 'none', backgroundColor: 'white', padding: '5px', border: '1px solid black' }}></div>
      <Dropdown handleClick={handleClick}/>
      <ScheduleButtons handleClick={handleClick}/>
    </div>
  );
};

export default LiabilitiesVisualization;
