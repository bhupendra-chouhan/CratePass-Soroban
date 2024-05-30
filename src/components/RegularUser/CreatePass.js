import React, { useState } from "react";
// import toast from "react-hot-toast";

const CreatePass = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePass = async () => {
    // const notification = toast.loading("Filing Complaint");
    // try {
    //     const data = await fileComplaint([title, description]);
    //     toast.success(`Complaint Filed! Note Your ComplaintId:${nextId}`, {
    //         id: notification,
    //     });
    //     console.info("contract call successs", data);
    //     setTitle("");
    //     setDescription("");
    // } catch (err) {
    //     toast.error("Whoops, something went wrong!", {
    //         id: notification,
    //     });
    //     console.error("contract call failure", err);
    // }
  };

  return (
    <div className="md: mr-[50px] md:ml-[50px] bg-yellow-300 w-[98%] rounded-lg p-5">
      <p className="text-center">Create Pass:</p>
      <div className="w-[100%]  flex flex-col gap-5 items-center justify-center">
        <div className="w-[75%] py-2 flex flex-col gap-3">
          <div className="md:flex items-center justify-between">
            <p className="">Title: </p>
            <input
              type="text"
              className="md:w-[500px] w-[300px] p-2 rounded-md"
              placeholder="Enter Title Here"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="md:flex items-center justify-between">
            <p className="complaint-text-normal">Description: </p>
            <input
              type="text"
              className="md:w-[500px] w-[300px] p-2 rounded-md"
              placeholder="Enter Description Here"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="p-2 rounded-md text-white bg-green-600 hover:bg-green-800"
          onClick={handleCreatePass}
        >
          Create Pass
        </button>
      </div>
    </div>
  );
};

export default CreatePass;
