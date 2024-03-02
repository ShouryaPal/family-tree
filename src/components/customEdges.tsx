import { FC, memo } from "react";
import {
	EdgeProps,
	getBezierPath,
	EdgeLabelRenderer,
	BaseEdge,
} from "reactflow";

const CustomEdge: FC<EdgeProps> = ({
	id,
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
	data,
}) => {
	const [edgePath, labelX, labelY] = getBezierPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
	});

	return (
		<>
			<BaseEdge id={id} path={edgePath}  />
			<EdgeLabelRenderer>
				<div
					style={{
						transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
					}}
					className="absolute bg-amber-300 rounded-md font-bold text-xl p-2  nodrag nopan"
				>
					{data.label}
				</div>
			</EdgeLabelRenderer>
		</>
	);
};

export default memo(CustomEdge);
