import DeleteIcon from "./icons/DeleteIcon";

interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}

const TaskCard = ({ id, title, description, onDelete }: TaskCardProps) => {
  return (
    <div className="p-4 w-full bg-slate-50 opacity-95 rounded shadow-md flex justify-between items-center">
      <div className="flex flex-col max-w-[80%]">
        <h3 className="text-xl font-bold truncate">{title}</h3>
        <p className="text-gray-700 truncate">{description}</p>
      </div>
      <span
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700"
        aria-label="Delete Task"
      >
        <DeleteIcon size={25} color="red" className="cursor-pointer" />
      </span>
    </div>
  );
};

export default TaskCard;
