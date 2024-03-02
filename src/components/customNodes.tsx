import { memo } from "react";
import { FaHeart, FaSkull } from "react-icons/fa";
import { Handle, Position } from "reactflow";

type props = {
	data: {
		label: string;
		isAlive: boolean;
		gender: string;
	};
};

function customNode({ data }: props) {
	const isAliveIcon = data.isAlive ? (
		<FaHeart className="text-green-500" />
	) : (
		<FaSkull className="text-red-500" />
	);

	return (
		<div className="px-4 py-2 shadow-md rounded-md bg-white border-2">
			<div className="flex">
				<div className="rounded-full w-12 h-12 flex justify-center items-center border border-black">
					{data?.gender === "Male" ? "🚹" : "🚺"}
				</div>
				<div className="ml-2 flex items-center gap-2">
					<div className="text-lg font-bold">{data.label}</div>
					<div className="text-gray-500 mx-auto">{isAliveIcon}</div>
				</div>
			</div>
			<Handle
				type="target"
				position={Position.Top}
				className="!bg-transparent"
			/>
			<Handle
				type="source"
				position={Position.Bottom}
				className="!bg-transparent"
			/>
		</div>
	);
}

export default memo(customNode);
