import { Tree } from './data';
import * as d3 from 'd3';

type TreemapProps = {
  width: number;
  height: number;
  data: Tree;
};

export const Treemap = ({ width, height, data }: TreemapProps) => {
  const hierarchy = d3.hierarchy(data).sum((d) => d.value);

  const treeGenerator = d3.treemap<Tree>().size([width, height]).padding(4);
  const root = treeGenerator(hierarchy);

  const allShapes = root.leaves().map((leaf: any) => {
    return (
      <g key={leaf.id}>
        <rect
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          stroke="transparent"
          fill={'#69b3a2'}
          className={'opacity-80 hover:opacity-100'}
        />
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 3}
          fontSize={12}
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-bold"
        >
          {leaf.data.name}
        </text>
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 18}
          fontSize={12}
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-light"
        >
          {leaf.data.value}
        </text>
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height} key={1}>
        {allShapes}
      </svg>
    </div>
  );
};
