"use client";
import customEdges from "@/components/customEdges";
import customNodes from "@/components/customNodes";
import { familyData } from "@/lib/data";
import { useState, useCallback } from "react";
import ReactFlow, {
	Controls,
	Background,
	applyNodeChanges,
	applyEdgeChanges,
	MiniMap,
	NodeTypes,
	EdgeTypes,
	OnEdgesChange,
	OnNodesChange,
	Edge,
	useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes= familyData.persons.map((person, index) => ({
	id: person.name,
	data: { label: person.name, gender: person.gender, isAlive: person.is_alive },
	type: "custom",
	position: {
		x: Math.random() * 100 + index * 150,
		y: Math.random() * 100 + index * 150,
	},
}));

const initialEdges: Edge[] = familyData.relations.map((relation) => ({
	id: `${relation.src}-${relation.dest}`,
	source: relation.src,
	target: relation.dest,
	type: "custom",
	style: { stroke: "#ccc", strokeWidth: 2 },
	data: { label: relation.relation },
}));

const nodeTypes: NodeTypes = {
	custom: customNodes,
};

const edgeTypes: EdgeTypes = {
	custom: customEdges,
};

function Flow() {
	const [nodes, setNodes] = useNodesState(initialNodes);
	const [edges, setEdges] = useState<Edge[]>(initialEdges);

	const onNodesChange: OnNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[setNodes],
	);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const onEdgesChange: OnEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[setEdges],
	);

	return (
		<div className="h-screen">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				fitView
			>
				<Background />
				<Controls />
				<MiniMap />
			</ReactFlow>
		</div>
	);
}

export default Flow;
