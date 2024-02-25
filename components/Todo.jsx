import React from "react";

const Todo = () => {
  return (
    <>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            1
          </th>
          <td className="px-6 py-4">Learn Piano</td>
          <td className="px-6 py-4">Today's task - Introduction To Notes</td>
          <td className="px-6 py-4">Complete</td>
          <td className="px-6 py-4">
            <button className="text-white  bg-red-500 py-2 px-6 hover:bg-red-700 duration-300 transition-all">
              Delete
            </button>
            <button className="text-white  bg-green-500 py-2 px-6 hover:bg-green-700 duration-300 transition-all">
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Todo;
