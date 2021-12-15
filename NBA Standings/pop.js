const data=[
    {name:'Kohli',score:80},
    {name:'Rahul',score:90},
    {name:'Rohit',score:60},
];

const width = 800;
const height = 400;
const margin = {top:50,bottom:50, left:50, right:50}

const svg=d3.select('#d3_container')
.append('svg')
.attr('height', height - margin.top - margin.bottom)
.attr('width', width - margin.left - margin.right)
.attr('viewBox', [0,0,width,height]);

const x=d3.scaleBand()
.domain(d3.range(data.legth))
.range([margin.left, width - margin.right])
.padding(0.1);

const y=d3.scaleLinear()
.domain([0,100])
.range([height - margin.bottom, margin.top]);

svg
.append('g')
.attr('fill','royalblue')
.selectAll('rect')
.data(data.sort((a,b)=> d3.descending(a.score, b.score)))
.join('rect')
.attr('x',(d,i)=>x(i))
.attr('y',(d)=>y(d.score))
.attr('height',d=>y(0) - y(d.score))
.attr('width', x.bandwidth())

function xAxis(g){

}

function yAxis(g){
    
}