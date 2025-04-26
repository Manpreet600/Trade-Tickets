import React, { useRef, useState } from "react";
import AddIcon from "./AddIcon";

function SearchBar() {
  const [showForm, setShowForm] = useState(false);
  const titleRef = useRef(null);
  const costRef = useRef(null);
  const locationRef = useRef(null);
  const typeRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const dateRef = useRef(null);


  const handleAddTicket = async () => {
    const data = await fetch("http://localhost:3000/api/tickets/createTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        title: titleRef.current.value,
        cost: costRef.current.value,
        location: locationRef.current.value,
        type: typeRef.current.value,
        description: descriptionRef.current.value,
        image: imageRef.current.value,
        date: dateRef.current.value,
      }),
    });
    const response = await data.json();
    if (response.message === "Ticket created successfully") {
      alert("Ticket created successfully");
      setShowForm(false);
    } else {
      console.log(response.message)
      alert("Error creating ticket");
    }
    titleRef.current.value = "";
    costRef.current.value = "";
    locationRef.current.value = "";
    typeRef.current.value = "Sports";
    descriptionRef.current.value = "";
    imageRef.current.value = "";
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex flex-wrap gap-4 items-center rounded-md">
        <input
          className="flex-1 px-3 py-2 text-sm text-white rounded-md border border-solid bg-neutral-900 border-neutral-700 min-w-[280px]"
          type="search"
          placeholder="Search tickets..."
          aria-label="Search tickets"
        />
        <select
          className="px-3 py-2 text-sm text-white rounded-md border border-solid cursor-pointer bg-neutral-900 border-neutral-700"
          aria-label="Filter by category"
        >
          <option>All Categories</option>
          <option>Sports</option>
          <option>Concerts</option>
          <option>Theater</option>
        </select>
        <button
          className="flex gap-2 items-center px-4 py-2 text-sm font-semibold text-white bg-green-700 rounded-md cursor-pointer border-none hover:bg-green-600"
          onClick={() => setShowForm((prev) => !prev)}
        >
         { !showForm? <AddIcon />:""}
          <span>{showForm ? "Cancel" : "List Ticket"}</span>
        </button>
      </div>

      {showForm && (
        <div className="p-4 bg-neutral-800 rounded-md text-white border border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Event Title"
              ref={titleRef}
              className="p-2 rounded bg-neutral-900 border border-neutral-700"
            />
            <input
              type="number"
              placeholder="Cost in rupees"
              ref={costRef}
              className="p-2 rounded bg-neutral-900 border border-neutral-700"
            />
            <input
              type="text"
              placeholder="Location"
              ref={locationRef}
              className="p-2 rounded bg-neutral-900 border border-neutral-700"
            />

            <select
              ref={typeRef}
              className="p-2 rounded bg-neutral-900 border border-neutral-700"
            >
              <option value="Sports">Sports</option>
              <option value="Concerts">Concerts</option>
              <option value="Theater">Theater</option>
            </select>
            <input
              type="date"
              placeholder="Date"
              ref={dateRef}
              className="p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
            />
          </div>
          <textarea
            rows="3"
            placeholder="Description"
            ref={descriptionRef}
            className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 mb-4"
          ></textarea>
          <input
            type="text"
            placeholder="Image URL (optional)"
            ref={imageRef}
            className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 mb-4"
          />

          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-green-700 rounded hover:bg-green-600"
              onClick={handleAddTicket}
            >
              Add Ticket
            </button>
            <button
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-500"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
