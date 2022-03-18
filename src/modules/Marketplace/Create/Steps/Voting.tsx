import React, { useState } from "react";
import { useAtom } from "jotai";
import { createFormAtom } from "atoms/create";

const Voting = () => {
  const [form, setForm] = useAtom(createFormAtom);

  return (
    <div className="flex flex-col gap-4 p-5 border border-brandblack rounded-3xl">
      <span className="font-bold text-brand-lg">Choose Voting System</span>

      <span className="flex gap-4 text-brand-lg">
        Voting Rules{" "}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14" cy="14" r="13.5" stroke="white" />
          <path
            d="M10.5859 11.1924H11.8384C11.9189 10.145 12.6221 9.49316 13.728 9.49316C14.8193 9.49316 15.5225 10.1597 15.5225 11.0679C15.5225 11.8516 15.1929 12.313 14.3433 12.833C13.3398 13.4336 12.8711 14.0928 12.8784 15.0596V15.7334H14.1602V15.2573C14.1602 14.4883 14.4238 14.0781 15.354 13.5288C16.2915 12.9648 16.8848 12.1519 16.8848 11.002C16.8848 9.49316 15.625 8.35059 13.7793 8.35059C11.7212 8.35059 10.6665 9.61035 10.5859 11.1924ZM13.6182 19.1318C14.2114 19.1318 14.6289 18.707 14.6289 18.1138C14.6289 17.5132 14.2114 17.0884 13.6182 17.0884C13.0249 17.0884 12.6001 17.5132 12.6001 18.1138C12.6001 18.707 13.0249 19.1318 13.6182 19.1318Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="text-brand-md text-gray-950">
        Choose voting rules for your Verse
      </span>
      <span className="flex gap-4 text-brand-lg">Support</span>
      <span className="text-brand-md text-gray-950">
        Choose voting rules for your Verse
      </span>
      <div className="relative w-full max-w-md form-control ">
        <input
          type="text"
          className="rounded-full input input-primary input-sm"
          value={form.support}
        />
        <span className="absolute right-5 top-1 text-brand-md text-gray-950">
          %
        </span>
      </div>
      <div className="w-full max-w-md form-control">
        <label className="label">
          <span className="label-text">0%</span>
          <span className="label-text-alt">100%</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => setForm({ ...form, support: e.target.value })}
          value={form.support}
          className="range range-secondary"
        />
      </div>
      <span className="flex gap-4 text-brand-lg">Quorum</span>
      <span className="text-brand-md text-gray-950">
        Minimum % of partecipants
      </span>
      <div className="relative w-full max-w-md form-control ">
      <input
          type="text"
          className="rounded-full input input-primary input-sm"
          value={form.quorum}
        />
        <span className="absolute right-5 top-1 text-brand-md text-gray-950">
          %
        </span>
      </div>
      <div className="w-full max-w-md form-control">
        <label className="label">
          <span className="label-text">0%</span>
          <span className="label-text-alt">100%</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => setForm({ ...form, quorum: e.target.value })}
          value={form.quorum}
          className="range range-secondary"
        />
      </div>
    </div>
  );
};

export default Voting;
