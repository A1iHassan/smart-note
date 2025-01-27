import { useState } from "react";
import SingleTask, { SingleTaskProps } from "./taskCard";

const Tasks = () => {
  const [task, setTask] = useState<SingleTaskProps>({ title: "", snippet: "" });
  const [tasks, setTasks] = useState<SingleTaskProps[]>([]);

  const handleAllTasks = () => {
    setTasks([...tasks, task]);
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.target.name === "title"
      ? setTask((prev) => ({ ...prev, title: e.target.value }))
      : setTask((prev) => ({ ...prev, snippet: e.target.value }));
  };

  return (
    <div>
      <form className="flex flex-col gap-2 bg-slate-50 p-4 items-start w-1/2 rounded-lg shadow-lg">
        <label className="font-light">Title</label>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleInput}
          className="border rounded-md border-slate-300 focus:outline-none focus:border-slate-500 p-1"
        />
        <label className="font-light">Content</label>
        <textarea
          name="content"
          placeholder="Enter the note's content"
          onChange={handleInput}
          className="border rounded-md border-slate-300 focus:outline-none focus:border-slate-500 p-1"
        />
        <button
          type="button"
          onClick={handleAllTasks}
          className="border border-slate-300 bg-slate-50 cursor-pointer p-1 hover:bg-slate-300 rounded"
        >
          Add
        </button>
      </form>
      {tasks.map((item, index) => (
        <SingleTask key={index} title={item.title} snippet={item.snippet} />
      ))}
    </div>
  );
};

export default Tasks;
