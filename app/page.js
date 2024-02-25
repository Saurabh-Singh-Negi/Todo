"use client";

import Todo from "@/components/Todo";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleDescriptionChange = (e) => {
    setTodo({
      ...todo,
      ["description"]: e.target.value,
    });
  };

  const handleTitleChange = (e) => {
    setTodo({
      ...todo,
      ["title"]: e.target.value,
    });
  };

  const resetForm = () => {
    setTodo({
      title: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.success("Todo Created");
      resetForm();
    } catch (error) {
      toast.error("Failed To Create Todo");
    }
  };

  return (
    <>
      <section className="w-full md:w-[70%] mx-auto py-24  px-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              value={todo.title}
              onChange={handleTitleChange}
              className="border-2 w-full h-10 border-purple-500 p-2 outline-none"
              type="text"
              placeholder="Enter Title"
            />
          </div>
          <div className="mb-3">
            <textarea
              value={todo.description}
              onChange={handleDescriptionChange}
              className="border-2 w-full border-purple-500 p-2 outline-none"
              placeholder="Enter Description"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <div className="mb-3">
            <button className="text-white  bg-purple-500 py-2 px-6 hover:bg-purple-700 duration-300 transition-all">
              Add Todo
            </button>
          </div>
        </form>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            {Array(10)
              .fill(null)
              .map((todoItem, index) => (
                <Todo key={index} />
              ))}
          </table>
        </div>
      </section>
    </>
  );
}
